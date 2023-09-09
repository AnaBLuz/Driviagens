import { db } from "../database/databaseConnection.js";

async function insert(firstName, lastName){
    await db.query(`INSERT INTO passengers ("firstname", "lastname")
    VALUES ($1, $2);`, [firstName, lastName])
    
}


const passengersRepository = { insert }

export default passengersRepository