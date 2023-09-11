import { Router } from "express";
import flightsController from "../controllers/flightsController.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { flightSchema } from "../schemas/flightsSchemas.js"

const flightsRouter = Router()
flightsRouter.post("/flights",validateSchema(flightSchema),flightsController.insertFligths)


export default flightsRouter