import * as z from 'zod';

export const signUpSchema = z.object({
    firstName: z.string().min(1).max(99),
    lastName: z.string().min(1).max(99),
    email: z.string().min(1).max(99),
})

export const aboutYouSchema = z.object({
    recentAdress: z.string(),
    city: z.string().max(50),
    state: z.string().max(50),
    zipcode: z.string().max(10),
})