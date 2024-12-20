import { metaData } from "@/docs";
import { products } from "@/docs/product";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    productId: string;
  }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { productId } = await params;
  console.log(productId);

  
  const target = products.find((item) => {
    return productId === item.id;
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
