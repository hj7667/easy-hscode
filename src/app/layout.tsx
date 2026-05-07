import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easy HS Code AI | AI 기반 HS Code 자동 분류",
  description: "상품명만으로 찾는 3초 HS Code. 복잡한 관세율표 대신 AI가 정확하게 분류해드립니다.",
  verification: {
    google: "sDFPYWB1ecfKC03FniTBirIjR4_pFVfz2MzOCh1yWAQ",
  },
  icons: {
    icon: "/images/easyHsLogo.png",
  },
  openGraph: {
    title: "Easy HS Code AI | AI 기반 HS Code 자동 분류",
    description: "상품명만으로 찾는 3초 HS Code. 복잡한 관세율표 대신 AI가 정확하게 분류해드립니다.",
    url: "https://easy-hscode.com",
    siteName: "Easy HS Code AI",
    images: [
      {
        url: "https://easy-hscode.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Easy HS Code AI",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy HS Code AI | AI 기반 HS Code 자동 분류",
    description: "상품명만으로 찾는 3초 HS Code",
    images: ["https://easy-hscode.com/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V6Q8S8BV6J"
          strategy="afterInteractive"
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1360221293714973"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V6Q8S8BV6J');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}