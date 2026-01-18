import {Pool} from "pg";
import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
    connectionString: process.env.DB_CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: true,
    },
});

pool
    .connect()
    .then(() => console.log("Databasega ulandik"))
    .catch((error) => console.log(error));