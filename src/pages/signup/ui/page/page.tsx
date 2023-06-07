import { SignUpForm } from "@/features/signup";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="md:max-w-xs w-full">
        <SignUpForm />
      </div>
    </div>
  );
}
