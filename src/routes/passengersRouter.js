import { Router } from "express";
import passengersController from "../controllers/passengersController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { passengerSchema } from "../schemas/passengersSchemas.js";

const passengersRouter = Router()

passengersRouter.post("/passengers", validateSchema(passengerSchema), passengersController.insert);
passengersRouter.get("/passengers/travels", passengersController.selectPassenger);





export default passengersRouter