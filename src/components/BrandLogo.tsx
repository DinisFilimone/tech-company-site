"use client";

import Image from "next/image";
import { useSiteTheme } from "@/contexts/ThemeContext";

type Props = {
  alt: string;
  className?: string;
  /** Altura visual (largura proporcional) — alinhada ao logótipo anterior (~200×78 visual com h-9/h-10). */
  heightClass?: string;
};

/** TWD em PNG: branco no modo escuro, versão escura gerada no modo claro; dimensões intrínsecas 1024×575. */
export default function BrandLogo({ alt, className = "", heightClass = "h-9" }: Props) {
  const { mode } = useSiteTheme();
  const isDark = mode === "dark";

  return (
    <span className={`relative isolate inline-flex ${className}`}>
      <Image
        src={isDark ? "/images/twd-logo-white.png" : "/images/twd-logo-dark.png"}
        alt={alt || "Creative Tech"}
        width={1024}
        height={575}
        priority
        className={`w-auto object-contain object-left ${heightClass} ${
          isDark ? "mix-blend-screen" : "mix-blend-multiply"
        }`}
      />
    </span>
  );
}
