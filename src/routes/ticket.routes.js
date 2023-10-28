import { Router } from "express";
import { getTickets, getTicket, createTicket, deleteTicket, updateTicket } from "../controllers/ticket.controller.js";
import { authRequired } from "../middlewares/validate.token.js";
import { createTicketSchema } from "../validators/ticket.validator.js";
import { validatorSchema } from "../middlewares/validator.middleware.js";

const router = Router()

router.get('/tickets', authRequired, getTickets);
router.get('/ticket/:id', authRequired, getTicket);
router.post('/ticket', authRequired, validatorSchema(createTicketSchema), createTicket);
router.put('/updateTicket/:id', authRequired, updateTicket);
router.delete('/deleteTicket/:id', authRequired, deleteTicket);

export default router