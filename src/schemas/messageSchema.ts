import { z } from "zod"

export const messageSchema = z.object({
    content: z
        .string()
        .min(10, { message: "Contemt must be atleast of 10 characters" })
        .max(300, { message: "Contemt must be no longer than 300 characters" })
})