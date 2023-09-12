import flightsRepository from "../repositories/fligthtsRepository.js";
import badRequest  from "../errors/badRequest.js";
import conflictError from "../errors/conflict.js";
import notFoundError  from "../errors/notFound.js";
import  unprocessable  from "../errors/unprocessable.js";
import citiesRepository  from "../repositories/citiesRepository.js"
import { dateQuerySchema} from "../schemas/flightsSchemas.js"


async function insertFlights(origin,destination,date){
    const cityExists = await citiesRepository.verifyCities(origin, destination)
    if (cityExists.rows.length !== 2 || !cityExists.rows) throw notFoundError(`Origem e/ou destino`) 
    if (origin === destination) throw conflictError(origin) 
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
    insertFlights, selectFlights
}

export default flightsService