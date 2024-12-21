import type { Metadata } from "next";
import { Merienda } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import React from "react";

export const merienda = Merienda({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Daanish Azim Sheikh | Portfolio",
  description: "Tech, Guide and Porfolio website",
};

export default function RootLayout({
  children,
  model
}: Readonly<{
  children: React.ReactNode;
  model: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {model}
        </ThemeProvider>
      </body>
    </html>
  );
}
