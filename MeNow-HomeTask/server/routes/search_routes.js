import express from 'express'

import { _changeScore, _getAllData } from "../controller/search_controllers.js";

const router = express.Router()

router.get('/all', _getAllData)
router.put('/update', _changeScore)


export default router
