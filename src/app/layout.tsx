import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

const themeBootstrap = `(function(){try{var k='technova-theme';var v=localStorage.getItem(k);var r=document.documentElement;if(v==='light'){r.classList.remove('dark');}else{r.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechNova — Software, web e automação",
  description:
    "Equipa de tecnologia a construir produtos digitais modernos: desenvolvimento web, apps, UI/UX e automação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="selection:bg-emerald-200/75 selection:text-emerald-950 dark:selection:bg-emerald-500/30 dark:selection:text-emerald-50 min-h-full bg-[#fafaf9] bg-[radial-gradient(ellipse_120%_80%_at_50%_-25%,rgba(16,185,129,0.11),transparent_55%),radial-gradient(ellipse_80%_50%_at_100%_40%,rgba(6,182,212,0.06),transparent_50%)] font-sans text-zinc-900 antialiased transition-colors duration-300 ease-out dark:bg-none dark:bg-zinc-950 dark:text-zinc-100">
        <Script id="technova-theme-init" strategy="beforeInteractive">
          {themeBootstrap}
        </Script>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
