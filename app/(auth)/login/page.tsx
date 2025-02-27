import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import LoginForm from "@/app/components/forms/LoginForm";

export default function Page() {
  return (
    <div className="tablet:content-center w-almost mx-auto grid h-screen content-start gap-16 py-8">
      <Image className="mx-auto w-48 invert" src={Logo} alt="logo" />

      <main>
        <LoginForm />
      </main>
    </div>
  );
}
