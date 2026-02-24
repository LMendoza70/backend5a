import {createPool} from 'mysql2/promise'
import dotenv from 'dotenv'

//configuramos dotenv para poder acceder al archivo .env
dotenv.config()

//creamos nuestro pool de conecccion a la base de datos 
const pool = createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT||3306,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

export default pool