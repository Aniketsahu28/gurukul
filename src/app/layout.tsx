import type { Metadata } from "next";
import "./globals.css";
import DesktopNavbar from "@/components/navbar/DesktopNavbar";
import { MobileNavbar } from "@/components/navbar/MobileNavbar";

export const metadata: Metadata = {
  title: "Gurukul - Ai Powered LMS",
  description: "A place to study and educated yourself by learning from the best people in industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DesktopNavbar />
        <MobileNavbar />
        {children}
      </body>
    </html>
  );
}