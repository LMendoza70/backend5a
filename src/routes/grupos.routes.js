import {Router} from 'express'
import * as ctrl from '../controllers/grupo.controller.js'
import midleware from '../midleware/auth.midleware.js'

const router= Router()

//rutas publicas 
router.get('/',midleware,ctrl.getGrupos)
router.get('/:id',ctrl.getGrupoById)

//ruta protegida por jwt
router.post('/',midleware,  ctrl.createGrupo)

export default router