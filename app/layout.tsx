"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: '#E5E4E2',
      },
      text: {
        primary: "#000000",
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}