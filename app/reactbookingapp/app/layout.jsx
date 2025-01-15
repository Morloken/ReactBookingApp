// import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import Header from "@/components/Header";

const inter  = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Booking app | Book a Room",
  description: "Book a meeting or conference room for you and your team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header />
        <main className="main.mx-auto.max-w-7xl.px-4.py-6 sm:px-6 lg:px-8">
        {children}
        </main>
      </body>
    </html>
  );
}
