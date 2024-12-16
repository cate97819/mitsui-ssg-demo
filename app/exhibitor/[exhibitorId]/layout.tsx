import type { Metadata } from "next";
import { metaData } from "@/docs";
import { exhibitors } from "@/docs/exhibitor";
import { siteConfig } from "@/props/siteConfig";

export const generateMetadata = async ({ params }: { params: { exhibitorId: string } }): Promise<Metadata> => {
  const { exhibitorId } = await params;

  const target = exhibitors.find((item) => {
    return exhibitorId === item.id;
  })

  return {
    title: `${target?.name} │ ${metaData.title}`,
    description: target?.description,
  }
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
