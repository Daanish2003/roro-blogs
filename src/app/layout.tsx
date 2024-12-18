import type { Metadata } from "next";
import { Merienda } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/Home/navbar";
import { NavbarProvider } from "@/components/providers/navbar-provider";

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
}: Readonly<{
  children: React.ReactNode;
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
          <NavbarProvider>
            <Navbar />
          </NavbarProvider>
          <div>
          {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
