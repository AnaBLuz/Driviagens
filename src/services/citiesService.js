import conflictError from "../errors/conflict.js"
import citiesRepository from "../repositories/citiesRepository.js"

async function insertCity(name){
    const existingCity = await citiesRepository.selectCity(name)
    if(existingCity) throw conflictError(name)
    else{ citiesRepository.insertCity(name) }
    

}

const citiesService = { insertCity }

export default citiesService