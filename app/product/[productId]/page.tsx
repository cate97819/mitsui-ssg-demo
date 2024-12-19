import { headerItem } from "@/docs";
import { products } from "@/docs/product";
import { siteConfig } from "@/props/siteConfig";

type Props = {
  params: Promise<{
    productId: string;
  }>
}

export default async function Home({ params }: Props) {

  const { productId } = await params;

  const target = products.find((item) => {
    return productId === item.id;
  })

  return (
  <div style={{marginTop: siteConfig.headerHeight + "px"}}>
    <div style={{maxWidth: siteConfig.contentsWidth}} className="w-full mx-auto text-sm py-2 flex flex-row gap-2">
      <a href={headerItem[0].href} className="underline">TOP</a>
      <span>＞</span>
      <a href={headerItem[2].href} className="underline">出展社一覧</a>
    </div>
    <div className="w-full mx-auto bg-red-700 text-white py-10">
      <h1 style={{maxWidth: siteConfig.contentsWidth}} className="w-full mx-auto text-2xl">
        {target?.name}
      </h1>
    </div>
  </div>
  );
}

export function generateStaticParams() {
  return products.map((item) => ({
    productId: item.id,
  }));
}