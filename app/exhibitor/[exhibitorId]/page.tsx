import ProductItem from "@/components/exhibitor/ProductItem";
import { headerItem } from "@/docs";
import { exhibitorCategory, exhibitors } from "@/docs/exhibitor";
import { siteConfig } from "@/props/siteConfig";

type Props = {
  params: Promise<{
    exhibitorId: string;
  }>
}

export default async function Home({ params }: Props) {

  const { exhibitorId } = await params;

  const target = exhibitors.find((item) => {
    return exhibitorId === item.id;
  })

  const categoriesArray: {id: number, label: string}[] = [];
  target?.categoryId.map((item) => (
    exhibitorCategory.find((i) => item === i.id && categoriesArray.push(i))
  ))

  return (
  <div style={{marginTop: siteConfig.headerHeight + "px"}}>
    <div style={{maxWidth: siteConfig.contentsWidth}} className="w-full mx-auto text-sm py-2 flex flex-row gap-2">
      <a href={headerItem[0].href} className="underline">TOP</a>
      <span>＞</span>
      <a href={headerItem[2].href} className="underline">出展社一覧</a>
    </div>
    <div className="w-full mx-auto bg-red-700 text-white py-10 px-4">
      <div style={{maxWidth: siteConfig.contentsWidth}} className="mx-auto">
        <div className="flex flex-row items-center gap-10">
          <img src={`/images/exhibitors/${target?.id}.png`} alt="" className="aspect-video bg-white p-4 max-w-[300px] object-contain"/>
          <div>
            <h1 className="text-2xl font-bold">{target?.name}</h1>
            {categoriesArray?.map((item, i) => (
              <span key={i} className="inline-block py-4 px-1">出展ゾーン：{item.label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div style={{maxWidth: siteConfig.contentsWidth}} className="mx-auto py-10 px-4">
      <p>{target?.description}</p>
    </div>
    <div style={{maxWidth: siteConfig.contentsWidth}} className="mx-auto px-4">
      <h1 className="text-xl font-bold py-1 px-3 my-2 border-l-red-700 border-l-4">出展商品</h1>
      <div className="flex flex-row gap-6 justify-start">
        {target?.productId.map((item, i) => (
          <ProductItem key={i} id={item}/>
        ))}
      </div>
    </div>
  </div>
  );
}

export function generateStaticParams() {
  return exhibitors.map((item) => ({
    exhibitorId: item.id,
  }));
}