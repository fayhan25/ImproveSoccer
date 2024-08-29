import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import { NavLinks } from '@/app/ui/nav-links'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soccer AI",
  description: "Soccer AI to improve your soccer skills",
};

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>         
          <NavLinks/>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
