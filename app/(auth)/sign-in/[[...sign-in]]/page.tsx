import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evently | Sign in",
};

export default function Page() {
  return <SignIn />;
}