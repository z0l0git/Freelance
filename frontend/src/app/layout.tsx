import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { DataProvider } from "@/components/context/DataContext";
import { Bounce } from "react-toastify";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce} // Here's the correct way to apply the transition
        />
      </body>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.0/socket.io.js"
        async
      />
    </html>
  );
}
