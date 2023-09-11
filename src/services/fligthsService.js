import flightsRepository from "../repositories/fligthtsRepository.js";

function insertFlights(origin,destination,date){
    flightsRepository.insertFlights(origin,destination,date)
}

async function selectFlights(origin, destination, smaller, bigger) {
    if ((smaller && !bigger) || (!smaller && bigger)) throw unprocessable("É necessário inserir a data inicial e final")
    if (smaller >= bigger) throw badRequest("A data inicial deve ser menor que a final")
    if (smaller && bigger){
        const data = {
            smaller, bigger
        }
        const validation = dateQuerySchema.validate(data)
        if (validation.error) {
            console.log(validation.error.details)
            throw unprocessable("formato das datas")
        }}
    const result = await flightsRepository.selectFlights(origin, destination, smaller, bigger)
    return result
}

const flightsService = {
    insertFlights, readFlights
}

export default flightsService