import LoginForm from "@/app/components/forms/LoginForm";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return <LoginForm />;
}
