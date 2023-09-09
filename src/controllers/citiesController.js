import citiesService from "../services/citiesService.js"

function insertCity(req,res){
  const { name } = req.body;
  citiesService.insertCity(name);
  res.sendStatus(201)

}

const citiesController = { insertCity }

export default citiesController