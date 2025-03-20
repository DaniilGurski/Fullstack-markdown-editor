import Image from "next/image";
import Logo from "@/public/assets/logo.svg";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="tablet:content-center w-almost mx-auto grid h-screen content-start gap-16 py-8">
      <Image className="mx-auto w-48 invert" src={Logo} alt="logo" />

      <div>{children}</div>
    </main>
  );
}
