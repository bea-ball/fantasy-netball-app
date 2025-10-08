"use client";
import { CredentialSignUp } from "@stackframe/stack";
import Link from "next/link";
import { Suspense } from "react";

export default function SignUp() {
  return (
    <main className="flex items-center justify-center ">
      <div className="h-screen flex items-center flex-col justify-center">
        <span className="brand-gradient px-3 mb-8 font-medium tracking-tighter w-fit text-3xl">
          Fantasy Netball
        </span>
        <Suspense>
          <CredentialSignUp />
          Have an account? <Link href="/login">Sign in</Link>
        </Suspense>
      </div>
    </main>
  );
}
