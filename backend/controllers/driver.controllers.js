import { Driver } from "../models/driver.models.js";
import apiError from "../utils/apiError.utils.js";
import apiResponse from "../utils/apiResponse.utils.js";

const registerDriver = async (req, res) => {
    const { licenseNumber, licenseCategory, licenseExpiry, contactNumber, safetyScore, status } = req.body;
    if (!licenseNumber || !licenseCategory || !licenseExpiry) {
        throw new apiError(400, "required feilds are neccessary")
    }

    const driverExists = await Driver.findOne({ licenseNumber })
    if (driverExists) {
        throw new apiError(400, "driver already exists")
    }
    const driver = await Driver.create({
        licenseNumber, licenseCategory, licenseExpiry, contactNumber, safetyScore, status, user: req.body.id
    })

    return res
        .status(200)
        .json(
            new apiResponse(200, { driver }, "driver registered successfully!")
        )
}

const getDrivers = async (req, res) => {
    const { status } = req.query
    const filter = {}
    if (status) filter.status = status;

    const drivers = await Driver.find({ filter });
    if (!drivers) {
        throw new apiError(500, "cannot get drivers")
    }
    return res
        .status(200)
        .json(
            new apiResponse(200, { drivers }, "all drivers data is successfully extracted!")
        )
}

const getOneDriver = async (req, res) => {
    const { driverId } = req.params;
    if (!drvierId) {
        throw new apiError(400, "driver id is required")
    }

    const driver = await Driver.findById(vehicleId);
    if (!driver) {
        throw new apiError(500, "Invalid driver ID")
    }

    return res
        .status(200)
        .json(
            new apiResponse(200, { driver }, "driver data is extracted successfully!")
        )
}

const updateDriver = async (req, res) => {
    const { contactNumber, safetyScore, status } = req.body;
    const { driverId } = req.params
    if (!driverId) {
        throw new apiError(404, "driver id is required!")
    }
    const driver = await Driver.findByIdAndUpdate(driverId, {
        contactNumber, safetyScore, status
    }, {
        new: true,
        runValidators: true
    })

    return res
        .status(200)
        .json(
            new apiResponse(200, { driver }, "driver updated successfully!")
        )
}

const retireDriver = async (req, res) => {
    const { driverId } = req.params
    const {status} = req.body
    if (!driverId) {
        throw new apiError(400, "driver id is required!")
    }
    await Driver.findByIdAndUpdate(driverId, status)

    return res
        .status(200)
        .json(
            new apiResponse(200, "driver is retired!")
        )

}

export {registerDriver, getDrivers, getOneDriver, updateDriver, retireDriver}
