"use client";

import "./globals.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import localFont from "next/font/local";
import Script from "next/script";

//fonts
const harmonyOs = localFont({
  src: [
    {
      path: "./../fonts/Gilroy-Regular.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "./../fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-Gilroy",
});

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <html lang="en" className={`${harmonyOs.variable} font-sans z-10`}>
        <body className="tracking-wider">
          <main>
            {/* <div id="google_translate_element"></div>  */}
            <Header />
            {children}
            <Footer />
            {/* <>
              <Button
                color="info"
                onClick={() => setIsOpen(true)}
                className="tracking-wider z-50"
              >
                Info Alert
              </Button>
              {isOpen && (
                <Alert
                  color="info"
                  variant="flat"
                  closable
                  onClose={() => setIsOpen(false)}
                >
                  <p className="font-semibold">Alert with info</p>
                  <p>
                    Attention All! We are excited to announce the launch of our
                    new product/service.
                  </p>
                </Alert>
              )}
            </> */}
          </main>
          <Script
            src="/assets/scripts/lang-config.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/assets/scripts/translation.js"
            strategy="beforeInteractive"
          />
          <Script
            src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
            strategy="afterInteractive"
          />
        </body>
      </html>
    </>
  );
}
