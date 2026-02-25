import {Router} from 'express'
import * as ctrl from '../controllers/grupo.controller.js'

const router= Router()

router.get('/',ctrl.getGrupos)
router.get('/:id',ctrl.getGrupoById)
router.post('/', ctrl.createGrupo)

export default router