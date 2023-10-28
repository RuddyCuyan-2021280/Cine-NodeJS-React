import { Router } from "express";
import {createMovie, getMovies} from '../controllers/movie.controller.js'

const router = Router()

router.get('/movies', getMovies)
router.post('/movie', createMovie)

export default router