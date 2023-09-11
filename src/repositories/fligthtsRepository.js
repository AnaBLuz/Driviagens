import { db } from "../database/databaseConnection.js"

async function insertFlights(origin, destination, date) {
    await db.query(`INSERT INTO flights (origin, destination, date)
    VALUES ($1, $2, $3);`, [origin, destination, date])
}

const flightsRepository = {
    insertFlights
}

export default flightsRepository