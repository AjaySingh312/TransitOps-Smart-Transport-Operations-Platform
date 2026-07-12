import { Driver } from "../models/driver.models.js";
import { Trip } from "../models/trip.models.js";
import { Vehicle } from "../models/vehicle.models.js"
import apiError from "../utils/apiError.utils.js"
import apiResponse from "../utils/apiResponse.utils.js"


const createTrip = async (req, res) => {
    const { source, destination, vehicleId, driverId, cargoWeight, plannedDistance, actualDistance, startOdometer, endOdometer, fuelConsumed, revenue }

    if (!driverId || !vehicleId || !destination || !source || !startOdometer) {
        throw new apiError(400, " these field are requried")
    }
    const driver = await Driver.findById(driverId)
    if (!driver) {
        throw new apiError(400, "driver not found")
    }
    const vehicle = await Vehicle.findById(vehicleId)
    if (!vehicle) {
        throw new apiError(400, "vehicle not found!")
    }
    if (cargoWeight > vehicle.maxLoadCapacity) {
        throw new apiError(500, " cargoweight is greateer them capacity of vehicle!")
    }
    const trip = await Trip.create({
        source, destination, vehicle = vehicleId, driver: driverId, cargoWeight, plannedDistance, actualDistance, startOdometer, endOdometer, fuelConsumed, revenue, status: "Draft", createdBy: req.user.id
    })

    return res 
        .status(200)
        .json(
            new apiResponse(200,{trip},"trip is created successfully!")
        )

}

const dispatchTrip = async (req,res) =>{
    const tripId = req.params
    if(!tripId){
        throw new apiError(400,"trip id is required!")
    }
    const trip = await Trip.findById(tripId)
    if(!Trip){
        throw new apiError(400, "trip not found!")
    }
    const driver = await Driver.findById(trip.driver)
    if(!driver){
        throw new apiError(400,"driver not found")
    }
    const vehicle = await Vehicle.findById(trip.vehicle)
    if(!vehicle){
        throw new apiError(400, "vehicle not found")
    }
    if(vehicle.status !== "Available"){
        throw new apiError(400, "vehicle is nto available");
    }
    if(vehicle.status === "In Shop"){
        throw new apiError(400,"vehicle in shop!");
    }
    if(driver.status !== "Available"){
        throw new apiError(400,"driver is not available")
    }
    driver.status = "On Trip"
    await driver.save({validateBeforeSave:false})
    trip.status = "Dispatched";
    await trip.save({validateBeforeSave:false})
    vehicle.status = "On Trip"
    await vehicle.save({validateBeforeSave:false})

    return res
        .status(200)
        .json(
            new apiResponse(200,{trip},"trip dispatched successfully!")
        )
}
export {createTrip, dispatchTrip}