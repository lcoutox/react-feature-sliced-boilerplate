import { Button, TextInput } from "@/shared/ui";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xs w-full p-4 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <TextInput label="Nome" />
          <TextInput label="Email" />
          <TextInput label="Senha" />
        </div>
        <Button>Cadastrar</Button>
      </div>
    </div>
  );
}
