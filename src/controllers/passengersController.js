import passengersService from "../services/passengersService.js"

function insert(req, res) {
    const { firstName, lastName } = req.body
    passengersService.insert(firstName, lastName)
    res.sendStatus(201)
}

const passengersControllers = { insert }


export default passengersControllers