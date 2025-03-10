import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/app/header";
import { SessionProvider } from "next-auth/react";
import { AppKnockProviders } from "@/app/knock-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Hush",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SessionProvider>
          <AppKnockProviders>
            <Header />
            <div className="container mx-auto py-12">{children}</div>
            
          </AppKnockProviders>
        </SessionProvider>
      </body>
    </html>
  );
}
