import z from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: "Username is required"
    }),
    email: z.string({
        required_error: 'Email is required'
    }).email({
        required_error: 'Email is not valid'
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, {
        message: 'Password must be at least 6 characters'
    }),
    phone: z.string({
        required_error: 'Phone is required'
    }).refine((value) => {
        // Verificar que sea un número y que tenga exactamente 8 dígitos
        return /^\d{8}$/.test(value.toString());
      }, {
        message: 'Phone must have exactly 8 digits',
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required'
    }).email({
        required_error: 'Email is not valid'
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6,{
        message: 'Password must be at least 6 characters'
    }),
})