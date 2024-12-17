import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { metaData } from "@/docs";
import Header from "@/components/section/Header";
import Footer from "@/components/section/Footer";
import Contact from "@/components/section/Contact";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
  robots: "noindex"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.className} antialiased`}
      >
        <div className="grid grid-rows-[1fr_max-content] min-h-screen">
          <Header/>
          {children}
          <Contact/>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
