// ===== IMPORTS & DEPENDENCIES =====
"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// ===== TYPES & INTERFACES =====
// FINAL FIX: This is the modern and correct way to get the props type for a component.
// We use React.ComponentProps to extract the type directly from the provider component itself.
// This is more robust than relying on the library to export a specific type name like 'ThemeProviderProps'.
type Props = React.ComponentProps<typeof NextThemesProvider>;


// ===== CORE BUSINESS LOGIC =====
// The provider component now uses the correctly derived 'Props' type.
export function ThemeProvider({ children, ...props }: Props) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}