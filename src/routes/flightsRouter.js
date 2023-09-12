import { Router } from "express";
import flightsController from "../controllers/flightsController.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { flightsSchema } from "../schemas/flightsSchemas.js"

const flightsRouter = Router()
flightsRouter.post("/flights",validateSchema(flightsSchema),flightsController.insertFligths)
flightsRouter.get("/flights", flightsController.selectFligths)


export default flightsRouter