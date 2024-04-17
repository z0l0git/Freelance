import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { DataProvider } from "@/components/context/DataContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freelancely",
  description: "Made by Free Devs",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} scrollbar-hide`}>
        <ClerkProvider>
          <DataProvider>{children}</DataProvider>
        </ClerkProvider>
      </body>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.0/socket.io.js"
        async
      />
    </html>
  );
}
