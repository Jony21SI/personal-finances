"use client";

import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#dbdbdb",
      contrastText: "#2c0703",
    },
    secondary: {
      main: "#82667f",
    },
    warning: {
      main: "#73683b",
    },
    error: {
      main: "#3e000c",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#2c0703",
      secondary: "#73683b",
    },
  },
  typography: {
    fontFamily: `'Noto Sans Symbols', sans-serif`,
    h1: { fontSize: "2.5rem", fontWeight: 600 },
    h2: { fontSize: "2rem", fontWeight: 500 },
    h3: { fontSize: "1.75rem", fontWeight: 500 },
    h4: { fontSize: "1.5rem", fontWeight: 500 },
    h5: { fontSize: "1.25rem", fontWeight: 500 },
    h6: { fontSize: "1rem", fontWeight: 500 },
    body1: { fontSize: "1rem", fontWeight: 400 },
    body2: { fontSize: "0.875rem" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        sizeSmall: {
          padding: "4px 10px",
        },
      },
      variants: [
        {
          props: { color: "secondary", size: "small" },
          style: {
            backgroundColor: "#82667f",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#6e5669",
            },
          },
        },
      ],
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#82667f",
        },
      },
    },
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Symbols&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
