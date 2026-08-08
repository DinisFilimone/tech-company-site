import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
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

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Creative Tech — Software, web e criatividade digital",
  description:
    "Creative Tech: software, sistemas, websites, aplicações, design gráfico e infraestrutura para empresas — Built with quality, made for you.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="selection:bg-blue-200/75 selection:text-blue-950 dark:selection:bg-blue-500/30 dark:selection:text-blue-50 min-h-full bg-[#fafaf9] bg-[radial-gradient(ellipse_120%_80%_at_50%_-25%,rgba(59,130,246,0.11),transparent_55%),radial-gradient(ellipse_80%_50%_at_100%_40%,rgba(14,165,233,0.07),transparent_50%)] font-sans text-zinc-900 antialiased transition-colors duration-300 ease-out dark:bg-none dark:bg-zinc-950 dark:text-zinc-100">
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
