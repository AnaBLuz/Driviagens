import travelsServices from "../services/travelsService.js"

async function insertTravel(req, res) {
    const { passengerId, flightId } = req.body

    await travelsServices.insertTravel(passengerId, flightId)
    res.sendStatus(201)

}

async function selectTravel(req, res) {
    const {name} = req.query
    const passengersTravels = await travelsServices.selectTravel(name)
    return res.status(200).send(passengersTravels.rows)

}

const travelsController = {insertTravel, selectTravel}

export default travelsController