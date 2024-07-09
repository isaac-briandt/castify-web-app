import { SignUp } from "@clerk/nextjs";

const RegisterPage = () => {
  return (
    <div className="flex-center glassmorphism-auth h-screen w-full">
      <SignUp />
    </div>
  );
};

export default RegisterPage;
