import { db } from "../database/databaseConnection.js"

async function insertCity(name){
    await db.query(`INSERT INTO cities("name") VALUES($1);`, [name])
}

async function selectCity(name){
    const result = await db.query(`SELECT * FROM cities WHERE name = $1`, [name])
    return result.rows[0]
}

async function verifyCities(origin, destination){
    const result = await db.query(`SELECT * FROM cities WHERE id=$1 OR id=$2;`, [origin, destination])
    return result
}

const citiesRepository = { insertCity, selectCity, verifyCities}

export default citiesRepository