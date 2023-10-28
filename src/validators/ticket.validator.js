import z from 'zod'

export const createTicketSchema = z.object({
    seatings: z.string({
        required_error: 'Seating is  required'
    })
})