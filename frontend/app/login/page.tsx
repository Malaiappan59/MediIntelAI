// app/login/page.tsx  (server component)
import React, { Suspense } from "react";
import LoginClient from "./LoginClient";

export default function LoginPage() {
  return (
    <main>
      <h1>Sign in</h1>
      <Suspense fallback={<div>Loading login UI…</div>}>
        <LoginClient />
      </Suspense>
    </main>
  );
}
