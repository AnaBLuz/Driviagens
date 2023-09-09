import passengersRepository from "../repositories/passengersRepository.js"

function insert(firstName, lastName){
    passengersRepository.insert(firstName,lastName);
}



const passengersService = { insert }


export default passengersService