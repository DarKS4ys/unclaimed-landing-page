import * as z from 'zod';

export const signUpSchema = z.object({
    firstName: z.string().min(1).max(99),
    lastName: z.string().min(1).max(99),
    email: z.string().min(1).max(99),
})