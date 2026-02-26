"use client";
import "./globals.css";

import Footer from "./components/footer/footer";
import NavBar from "./components/nav/NavBar";
import Script from "next/script"


// 

export default function RootLayout({ children}) {
  return (
    <>
    <html lang="es">
      <head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no"/>
      </head>
      <body>
        <Script src="https://kit.fontawesome.com/d7a79a3abe.js" crossOrigin="anonymous"></Script>

          <NavBar/>
          <main className="wrapper">
            {children}
          </main>
            <Footer/>

        </body>
      </html>
    </>
  );
}
