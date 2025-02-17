import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uifly",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-w-screen min-h-screen relative">
          <div className="grainy dark:grainy-dark absolute inset-0 -z-[100] opacity-15 "></div>
          {children}
      </body>
    </html>
  );
}
