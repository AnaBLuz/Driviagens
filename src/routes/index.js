import { Router } from "express"
import passengersRouter from "./passengersRouter.js"
//import travelsRouter from "./travelsRouter.js"
//import flightsRouter from "./flightsRouter.js"
import citiesRouter from "./citiesRouter.js"

const router = Router()

router.use(passengersRouter)
//router.use(travelsRouter)
//router.use(flightsRouter)
router.use(citiesRouter)

export default router
