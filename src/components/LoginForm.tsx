"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function LoginForm() {
  const { data: session } = useSession();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", { email, password, redirect: false });
  };

  return (
    <div>
      {session ? (
        <div>
          <p>Welcome, {session.user?.email}</p>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      ) : (
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center gap-2"
        >
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      )}
    </div>
  );
}
