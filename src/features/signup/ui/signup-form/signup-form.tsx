import { Button, TextInput } from "@/shared/ui";
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  type SignUpFormSchema,
  signupFormSchema,
} from '@/features/signup/model/signup-form-schema'
import styles from './signup-form.module.css'
import { useCallback } from "react";
import { signupRequest } from "../../model/signup";

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
      signupRequest({ name, email, password})
    },
    []
  )

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={styles.content}>
        <TextInput 
          name="name"
          icon="user" 
          label="Nome" 
          register={register}
          error={errors.name?.message && 'Campo obrigatório'}
        />
        <TextInput 
          name="email"
          icon="email" 
          label="Email" 
          register={register}
          error={errors.email?.message && 'Campo obrigatório'}
        />
        <TextInput 
          password 
          name="password"
          icon="password" 
          label="Senha" 
          register={register}
          error={errors.password?.message && 'Campo obrigatório'}
        />
      </div>
      <Button>Cadastrar</Button>
    </form>
  );
}
