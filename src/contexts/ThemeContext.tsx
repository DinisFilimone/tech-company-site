"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ColorMode = "light" | "dark";

export const THEME_STORAGE_KEY = "technova-theme";

function persistAndApply(mode: ColorMode) {
  const root = document.documentElement;
  root.classList.toggle("dark", mode === "dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  } catch {
    /* ignore */
  }
}

type ThemeContextValue = {
  mode: ColorMode;
  setMode: (mode: ColorMode) => void;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ColorMode>("dark");
  const [hydrated, setHydrated] = useState(false);

  // Alinhar estado React com o DOM que o script `beforeInteractive` já definiu
  useLayoutEffect(() => {
    const domIsDark = document.documentElement.classList.contains("dark");
    const next = domIsDark ? "dark" : "light";
    queueMicrotask(() => {
      setModeState(next);
      setHydrated(true);
    });
  }, []);

  // Só depois da sincronização inicial: evita re-aplicar `dark` com o default e apagar o modo claro do script
  useEffect(() => {
    if (!hydrated) return;
    persistAndApply(mode);
  }, [mode, hydrated]);

  const setMode = useCallback((next: ColorMode) => {
    setModeState(next);
  }, []);

  const toggleMode = useCallback(() => {
    setModeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(() => ({ mode, setMode, toggleMode }), [mode, setMode, toggleMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useSiteTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useSiteTheme must be used inside ThemeProvider");
  return ctx;
}
