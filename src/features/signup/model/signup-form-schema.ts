import { z } from 'zod'

export const signupFormSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  email: z.string().min(1, { message: 'Email é obrigatório' }).email({
    message: 'Informe um email válido',
  }),
  password: z
    .string()
    .min(6, { message: 'Senha deve ter pelo menos 8 caracteres' }),
})

export type SignUpFormSchema = z.infer<typeof signupFormSchema>