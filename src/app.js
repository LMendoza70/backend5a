import express from 'express';

const app=express();
const PORT=3000;

app.get('/',(req,res)=>{
    res.send("Esto es mi primer API... v1.0001")
})

app.listen(PORT,()=>{
    console.log('la aplicacion esta funcionando desde el puerto '+PORT)
})