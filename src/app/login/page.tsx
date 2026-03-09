"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleLogin() {
    document.cookie = "auth-token=demo; path=/; max-age=86400";
    const redirectTo = searchParams.get("redirect") || "/";
    router.replace(redirectTo);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Login Page</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Log in
      </button>
    </div>
  );
}
