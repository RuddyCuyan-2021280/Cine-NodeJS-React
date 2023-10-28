import { Router } from "express";
import {login, logout, profile, register} from '../controllers/auth.controller.js'
import { authRequired } from "../middlewares/validate.token.js";
import { validatorSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../validators/auth.validator.js";

const router = Router();

router.post('/register', validatorSchema(registerSchema), register) //validatorSchema(registerSchema),

router.post('/login', validatorSchema(loginSchema), login)

router.post('/logout', logout)

router.get('/profile', profile)



export default router;