import SignupForm from "@/app/components/forms/SignupForm";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
};

export default function Page() {
  return <SignupForm />;
}
