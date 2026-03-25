"use client";

import { createContext, useContext, useRef, ReactNode } from "react";

type AsideEntry = { id: string; number: number; content: ReactNode };

type AsideContextType = {
  register: (id: string, content?: ReactNode) => number;
  getEntries: () => AsideEntry[];
};

const AsideContext = createContext<AsideContextType | null>(null);

export function AsideProvider({ children }: { children: ReactNode }) {
  const counterRef = useRef(0);
  const mapRef = useRef<Map<string, AsideEntry>>(new Map());

  function register(id: string, content?: ReactNode): number {
    if (!mapRef.current.has(id)) {
      counterRef.current += 1;
      mapRef.current.set(id, { id, number: counterRef.current, content });
    } else if (content !== undefined) {
      const existing = mapRef.current.get(id)!;
      mapRef.current.set(id, { ...existing, content });
    }
    return mapRef.current.get(id)!.number;
  }

  function getEntries(): AsideEntry[] {
    return Array.from(mapRef.current.values()).sort((a, b) => a.number - b.number);
  }

  return <AsideContext.Provider value={{ register, getEntries }}>{children}</AsideContext.Provider>;
}

export function useAside() {
  const ctx = useContext(AsideContext);
  if (!ctx) throw new Error("useAside must be used inside <AsideProvider>");
  return ctx;
}
