import * as grupoModel from '../models/grupo.model.js'

export const getGrupos= async (req,res)=>{
    try {
        const grupos= await grupoModel.getAllGrupos()
        res.status(200).json(grupos)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const getGrupoById= async (req, res)=>{
    try {
        const grupo = await grupoModel.detGrupoById(req.params.id)
        if(!grupo)
            return res.status(404).json({message:'como cuando buscabas el amor grupo no encontrado'})
        res.status(200).json(grupo)
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const createGrupo= async(req,res)=>{
    try {
        if (!req.body.nombre_grupo) 
            return res.status(400).json({msg: "Falta nombre"});
        
        const nuevo= await grupoModel.createGrupo(req.body)
        res.status(201).json(nuevo)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}