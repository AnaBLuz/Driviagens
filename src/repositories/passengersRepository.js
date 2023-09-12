import { db } from "../database/databaseConnection.js";

async function insert(firstName, lastName){
    await db.query(`INSERT INTO passengers ("firstname", "lastname")
    VALUES ($1, $2);`, [firstName, lastName])
    
}
async function readPassenger(id){
    const result = await db.query(`SELECT * FROM passengers WHERE id=$1;`, [id])
    return result
}


async function selectPassenger(nome){
    const queryParams = []
    let query = `SELECT * FROM passengers`;
    if (nome) {
        query += ` WHERE passengers."firstname" ILIKE $1 OR passengers."lastname" ILIKE $2;`
        queryParams.push(`%${nome}%`)
        queryParams.push(`%${nome}%`)
    }
    const result = await db.query(query, queryParams)
    console.log(query)
    return result
}


const passengersRepository = { insert, readPassenger, selectPassenger }

export default passengersRepository