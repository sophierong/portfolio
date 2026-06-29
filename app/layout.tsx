import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import CustomNavbar from "@/components/ui/custom-navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

/* Fonts */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sophie Rong",
  description: "Sophie's creative portfolio",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
        className={`relative scroll-smooth ${geistSans.className} antialiased`}
        data-scroll-behavior="smooth"
      >
        <head />
        <body
          className={`relative ${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased
        bg-cream-100 dark:bg-zinc-900`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="absolute top-6 left-0 right-0 z-50">
              <CustomNavbar />
            </div>

            <main
              className="relative z-10 w-full
              flex flex-col justify-center items-center
              mx-auto overflow-hidden
              px-10 md:px-20 lg:px-30 xl:px-40
              mb-16"
            >
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
