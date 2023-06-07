import { Button, TextInput } from "@/shared/ui";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xs w-full p-4 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <TextInput icon="email" label="Nome" />
          <TextInput icon="email" label="Email" />
          <TextInput password icon="password" label="Senha" />
        </div>
        <Button>Cadastrar</Button>
      </div>
    </div>
  );
}
