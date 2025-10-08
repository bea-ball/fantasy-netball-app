import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackClientApp } from "../stack/client";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fantasy Netball",
  description: "Create your team and compete in a fantasy netball league!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const stackTheme = {
    light: {
      primary: "rgb(155, 79, 255)",
    },
  };
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.variable} antialiased`}>
        <StackProvider app={stackClientApp}>
          <StackTheme theme={stackTheme}>
            <div>{children}</div>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
