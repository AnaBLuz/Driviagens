import { db } from "../database/databaseConnection.js"

async function insertCity(name){
    await db.query(`INSERT INTO cities("name") VALUES($1);`, [name])
}

const citiesRepository = { insertCity }

export default citiesRepository