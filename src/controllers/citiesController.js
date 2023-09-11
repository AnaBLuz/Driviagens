import citiesService from "../services/citiesService.js"

async function insertCity(req,res){
  const { name } = req.body;
  await citiesService.insertCity(name);
  res.sendStatus(201)

}

const citiesController = { insertCity }

export default citiesController