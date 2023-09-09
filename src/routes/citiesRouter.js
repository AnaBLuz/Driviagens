import { Router } from "express";
import citiesController from "../controllers/citiesController.js"
import { validateSchema } from "../middlewares/validateSchema.js";
import { citieSchema } from "../schemas/citiesSchemas.js"

const citiesRouter = Router()

citiesRouter.post("/cities", validateSchema(citieSchema), citiesController.insertCity)

export default citiesRouter