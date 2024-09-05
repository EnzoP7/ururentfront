import { Inter } from "next/font/google";
import { SearchContextProvider } from "./context/search";
import Head from "next/head";

// Importación de CSS global
import "./globals.css";

// Cargar fuente Inter de Google Fonts
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title:
    "Ururent - Alquiler de Vehículos en Todo el País | Vehículos confiables al mejor precio",
  description:
    "Ururent ofrece una amplia flota de autos, SUVs y camionetas para alquilar en todo Uruguay. Con más de 300 vehículos y 15 años de experiencia, encuentra el auto ideal para tu viaje.",
  keywords:
    "alquiler de autos, renta de vehículos, Uruguay, coches, autos económicos, camionetas, SUVs, alquiler a largo plazo, alquiler por día, renta de autos en Carmelo",
  robots: "index, follow",
  canonical: "https://www.ururent.com",
};

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="es">
        <Head>
          {/* Preconectar a Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="icon"
            href="public/images/marca/logo.ico"
            type="image/x-icon"
          />

          <link
            rel="icon"
            href="/public/images/marca/logo.png"
            type="image/png"
          />

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
