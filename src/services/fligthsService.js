import flightsRepository from "../repositories/fligthtsRepository.js";

function insertFlights(origin,destination,date){
    flightsRepository.insertFlights(origin,destination,date)
}

const flightsService = {
    insertFlights
}

export default flightsService