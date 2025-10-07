import type { Metadata } from "next";
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
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.variable} antialiased`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
