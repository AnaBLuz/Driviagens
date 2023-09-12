import { Router } from "express";
import travelsController from "../controllers/travelsController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { travelsSchema } from "../schemas/travelsSchema.js";

const travelsRouter = Router()

travelsRouter.post("/travels", validateSchema(travelsSchema), travelsController.insertTravel);


export default travelsRouter