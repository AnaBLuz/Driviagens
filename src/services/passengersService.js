import passengersRepository from "../repositories/passengersRepository.js"

function insert(firstName, lastName){
    passengersRepository.insert(firstName,lastName);
}

async function selectPassenger(nome){
    const result = await passengersRepository.selectPassenger(nome)
    return result.rows
}


const passengersService = { insert, selectPassenger }


export default passengersService