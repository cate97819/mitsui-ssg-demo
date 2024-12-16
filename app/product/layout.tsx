import type { Metadata } from "next";
import { metaData } from "@/docs";

export const metadata: Metadata = {
  title: `商品一覧 | ${metaData.title}`,
  description: metaData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
