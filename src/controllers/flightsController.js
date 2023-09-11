import flightsService from "../services/fligthsService.js";

function insertFligths(req,res){
    const {origin, destination,date} = req.body;
    flightsService.insertFlights(origin,destination,date);
    res.sendStatus(201)

}

const flightsController = { 
    insertFligths
}

export default flightsController



