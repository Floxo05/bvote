import {createConnection} from "mariadb";

export const getConnection = () => createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    ssl: false
});
