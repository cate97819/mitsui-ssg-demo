import { metaData } from "@/docs";
import { exhibitors } from "@/docs/exhibitor";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    exhibitorId: string;
  }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { exhibitorId } = await params;
  console.log(exhibitorId);

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
