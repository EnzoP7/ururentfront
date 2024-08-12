import { Inter } from "next/font/google";
import { SearchContextProvider } from "./context/search";
import Head from "next/head";

// Importación de CSS global
import "./globals.css";

// Cargar fuente Inter de Google Fonts
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Ururent",
  description: "Alquiler de Vehiculos en todo el País",
};

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="es">
        <Head>
          {/* Preconectar a Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          {/* Precargar la fuente crítica */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className={inter.className}>{children}</body>
      </html>
    </SearchContextProvider>
  );
}
