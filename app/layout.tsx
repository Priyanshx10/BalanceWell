import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BalanceWell - Work-Life Balance App",
  description: "Manage your tasks, track your health, and improve your work-life balance with BalanceWell.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gradient-to-r from-blue-600 to-blue-800`}
      >
        <Header />
        <main className="flex-grow bg-gradient-to-r from-blue-600 to-blue-800">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
