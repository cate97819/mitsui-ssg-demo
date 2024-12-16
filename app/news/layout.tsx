import type { Metadata } from "next";
import { metaData } from "@/docs";

export const metadata: Metadata = {
  title: `お知らせ | ${metaData.title}`,
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
