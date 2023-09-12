import passengersService from "../services/passengersService.js"

function insert(req, res) {
    const { firstName, lastName } = req.body
    passengersService.insert(firstName, lastName)
    res.sendStatus(201)
}

async function selectPassenger(req, res){
    const { nome } = req.query
    const allPassengers = await passengersService.selectPassenger(nome)
    res.status(200).send(allPassengers)
}

const passengersController = { insert, selectPassenger }


export default passengersController