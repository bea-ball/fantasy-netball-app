"use client";
import { Suspense, useActionState } from "react";
import { authenticate } from "../lib/actions";
import { useSearchParams } from "next/navigation";
import { CircleAlert } from "lucide-react";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/fantasy";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <main className="flex items-center justify-center ">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 items-center">
        <span className="brand-gradient px-3 font-medium tracking-tighter w-fit text-3xl">
          Fantasy Netball
        </span>
        <Suspense>
          <form
            action={formAction}
            className="flex flex-col gap-2 items-center mt-2"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="peer block w-full border-b-1 border-black py-[9px] text-sm  placeholder:text-gray-500"
            />
            <input
              className="peer block w-full border-b-1 border-black py-[9px] text-sm  placeholder:text-gray-500"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <input type="hidden" name="redirectTo" value={callbackUrl} />

            <button
              type="submit"
              aria-disabled={isPending}
              className="w-fit h-8 mt-2 items-center rounded-md bg-purple-500 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 cursor-pointer"
            >
              Login
            </button>
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage && (
                <>
                  <CircleAlert className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </>
              )}
            </div>
          </form>
        </Suspense>
      </div>
    </main>
  );
}
