import express from 'express';
import dotenv from 'dotenv';
import gruposRutas from './routes/grupos.routes.js';

dotenv.config()

const app=express();
const port = process.env.PORT || 3000

//definimos los midlewares necesarios para que nuestra aplicacion funcione
app.use(express.json())


//rutas
app.use('/api/grupos',gruposRutas)

app.get('/',(req,res)=>{
    res.send("Esto es mi primer API... v1.0001")
})

app.listen(port,()=>{
    console.log('la aplicacion esta funcionando desde el puerto '+port)
})