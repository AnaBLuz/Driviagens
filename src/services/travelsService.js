import  notFoundError  from "../errors/notFound.js";
import  tooMany  from "../errors/tooMany.js";
import flightsRepository from "../repositories/fligthtsRepository.js";
import passengersRepository from "../repositories/passengersRepository.js"
import travelsRepository from "../repositories/travelsRepository.js"

const MAX_RESULTS = 10

async function insertTravel(passengerId, flightId){
    const passengerExists = await passengersRepository.readPassenger(passengerId)
    if (passengerExists.rows.length === 0) throw notFoundError("Passageiro")
    const flightExists = await flightsRepository.verifyFlight(flightId)
    if (flightExists.rows.length === 0) throw notFoundError("Vôo")
    travelsRepository.insertTravel(passengerId, flightId)
}

async function selectTravel(name){
    const result = await travelsRepository.selectTravel(name)
    if (result.rows.length > MAX_RESULTS) throw tooMany()
    return result
}

const travelsServices = {insertTravel, selectTravel}

export default travelsServices