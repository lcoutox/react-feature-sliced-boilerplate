import { Button, TextInput } from "@/shared/ui";
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  type SignUpFormSchema,
  signupFormSchema,
} from '../../model/signup-form-schema'
import { useCallback } from "react";

export default function SignUpForm() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signupFormSchema),
  })

  const onSubmitHandler = useCallback(
    ({ name, email, password }: SignUpFormSchema) => {
      console.log({ name, email, password})
    },
    []
  )

  return (
    <form className='flex flex-col gap-8' onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="flex flex-col gap-4">
        <TextInput 
          icon="email" 
          label="Nome" 
          {...register('name')} 
          error={errors.name?.message && 'Campo obrigatório'}
        />
        <TextInput 
          icon="email" 
          label="Email" 
          {...register('email')} 
          error={errors.email?.message && 'Campo obrigatório'}
        />
        <TextInput 
          password 
          icon="password" 
          label="Senha" 
          {...register('password')} 
          error={errors.password?.message && 'Campo obrigatório'}
        />
      </div>
      <Button>Cadastrar</Button>
    </form>
  );
}
