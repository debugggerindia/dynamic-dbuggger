import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans, Poppins } from "next/font/google"

import Script from 'next/script';
import { GA_MEASUREMENT_ID, pageview } from '../lib/gtag';

import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnnouncementBar from "@/components/announcement-bar"
import MobileTabBar from "@/components/mobile-tab-bar"
import WhatsAppButton from "@/components/whatsapp-button"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "dbuggger - Shopify eCommerce Agency",
  description:
    "We build, optimize, and scale high-converting Shopify stores for brands that want to dominate their market.",
  icons: {
    icon: [{ url: "/images/favicon.png", type: "image/png" }],
    apple: [{ url: "/images/favicon.png" }],
  },
  generator: "Nikhil Dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "dbuggger",
              description: "Shopify eCommerce development & marketing agency",
              url: "https://dbuggger.com",
              telephone: "+919021271911",
              email: "contact@dbuggger.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "IT Park, MIDC, Parsodi, Pratap Nagar",
                addressLocality: "Nagpur",
                addressRegion: "Maharashtra",
                postalCode: "440022",
                addressCountry: "India",
              },
              sameAs: [
                "https://www.facebook.com/dbuggger",
                "https://www.twitter.com/dbuggger",
                "https://www.instagram.com/dbuggger",
                "https://www.linkedin.com/company/debuggger/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AnnouncementBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileTabBar />
          <WhatsAppButton phoneNumber="919021271911" />
        </ThemeProvider>
      </body>
    </html>
  )
}
