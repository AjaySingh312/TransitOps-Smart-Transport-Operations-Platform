import apiError from "../utils/apiError.utils.js"
import { Vehicle } from "../models/vehicle.models.js";
import apiResponse from "../utils/apiResponse.utils.js";

const registerVehicle = async (req, res) => {
    const { registrationNumber, vehicleName, model, type, maxLoadCapacity, odometer, acquisitionCost, status, region } = req.body;

    if (!registrationNumber || !vehicleName) {
        throw new apiError(400, "required field are neccesary to enter");
    }
    const vehicleExist = await Vehicle.findOne({ registrationNumber })
    if (vehicleExist) {
        throw new apiError(400, "vehicle already registered!")
    }
    const vehicle = await Vehicle.create({
        registrationNumber,
        vehicleName,
        model,
        type,
        maxLoadCapacity,
        odometer,
        acquisitionCost,
        status,
        region,
        createdBy: req.user.id
    })

    return res
        .status(200)
        .json(
            new apiResponse(200, { vehicle }, "vehicle registered successfully!")
        )
}

const getVehicles = async (req, res) => {
    const { type, status, region } = req.query
    const filter = {}
    if (type) filter.type = type
    if (status) filter.status = status;
    if (region) filter.region = region

    const vehicles = await Vehicle.find({ filter });
    if (!vehicles) {
        throw new apiError(500, "cannot get the vehicles data")
    }
    return res
        .status(200)
        .json(
            new apiResponse(200, { vehicles }, "all vehicles data is successfully extracted!")
        )
}

const getOneVehicle = async (req, res) => {
    const { vehicleId } = req.params;
    if (!vehicleId) {
        throw new apiError(400, "vehicle Id is required")
    }

    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) {
        throw new apiError(500, "Invalid vehicle ID")
    }

    return res
        .status(200)
        .json(
            new apiResponse(200, { vehicle }, "vehicle data is extracted successfully!")
        )
}

const updateVehicle = async (req, res) => {
    const { maxLoadCapacity, odometer, status, region } = req.body;
    const { vehicleId } = req.params
    if (!vehicleId) {
        throw new apiError(404, "vehicle id is required!")
    }
    const vehicle = await Vehicle.findByIdAndUpdate(vehicleId, {
        maxLoadCapacity,
        odometer,
        status,
        region
    }, {
        new: true,
        runValidators: true
    })

    return res
        .status(200)
        .json(
            new apiResponse(200,{vehicle}, "vehicle updated successfully!")
        )
}

const retireVehicle = async (req, res) => {
    const { vehicleId } = req.params
    if (!vehicleId) {
        throw new apiError(400, "vehicle id is required!")
    }
    await Vehicle.findByIdAndUpdate(vehicleId, { status: "Retried" })

    return res
        .status(200)
        .json(
            new apiResponse(200, "vehicle is retired!")
        )

}

export { registerVehicle, getOneVehicle, getVehicles, updateVehicle, retireVehicle }