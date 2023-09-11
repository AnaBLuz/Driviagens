import flightsService from "../services/fligthsService.js";

function insertFligths(req,res){
    const {origin, destination,date} = req.body;
    flightsService.insertFlights(origin,destination,date);
    res.sendStatus(201)

}
async function readFligths(req, res) {
    const {origin, destination, "smaller-date": smaller, "bigger-date": bigger } = req.query
    const allFlights = await flightsServices.readFligths(origin, destination, smaller, bigger)
    return res.status(200).send(allFlights.rows)
}


const flightsController = { 
    insertFligths
}

export default flightsController



