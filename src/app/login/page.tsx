"use client";
import { useSession } from "next-auth/react";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>next-auth setup</h1>
      {session ? <p>Welcome, {session.user?.email}</p> : <LoginForm />}
    </div>
  );
}
