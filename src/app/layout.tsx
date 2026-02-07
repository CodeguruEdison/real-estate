import { ClerkProvider } from "@clerk/nextjs";

import { Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";

export { metadata } from "./meta";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Heading font - modern, friendly geometric
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

// Mono font for code
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

//https://github.com/sonnysangha/property-listings-app-nextjs-clerk-auth-billing-sanity-saas


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://cdn.sanity.io" />
          <link rel="preconnect" href="https://fonts.googleapis.sanity.io" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </head>
         
        <body className={`${inter.variable} ${plusJakarta.variable} ${geistMono.variable} font-body antialiased`}>
          {/* <header className="flex h-16 items-center justify-end gap-4 p-4">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button
                  type="button"
                  className="cursor-pointer rounded-full bg-[#6c47ff] px-4 font-medium text-sm text-white h-10 sm:h-12 sm:px-5 sm:text-base"
                >
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header> */}
          {children}
          <SanityLive requestTag="next-app" />
        </body> 
      </html>
    </ClerkProvider>
  );
}
