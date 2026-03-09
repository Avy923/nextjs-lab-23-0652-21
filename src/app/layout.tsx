import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../lib/cart-context";
import CartSummary from "./components/CartSummary";
import LoginButton from "./login/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js-Lab",
  description: "Next.js-Lab description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <CartProvider>
          <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
            <div className="font-bold text-lg">Next.js-Lab</div>
            <div className="flex gap-6 items-center">
              <a href="/" className="hover:underline">Home</a>
              <a href="/contact" className="hover:underline">Contact</a>
              <a href="/shop" className="hover:underline">Shop</a>
              <CartSummary />
              <a href="/login" className="hover:underline">Login</a>
            </div>
          </nav>

          <main className="flex-1 p-6">{children}</main>

          <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
            © {currentYear} Next.js-Lab. All rights reserved.
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
