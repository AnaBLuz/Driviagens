import citiesRepository from "../repositories/citiesRepository.js"

function insertCity(name){
    citiesRepository.insertCity(name)

}

const citiesService = { insertCity }

export default citiesService