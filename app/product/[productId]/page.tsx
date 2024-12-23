import ExhibitorItem from "@/components/product/ExhibitorItem";
import { headerItem } from "@/docs";
import { productCategory, products, smallCategory } from "@/docs/product";
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

  const categoriesArray: {id: number, label: string}[] = [];
  target?.categoryId.map((item) => (
    productCategory.find((i) => item === i.id && categoriesArray.push(i))
  ))

  const smallCategoriesArray: {id: number, label: string}[] = [];
  target?.smallCategoryId.map((item) => (
    smallCategory.find((i) => item === i.id && smallCategoriesArray.push(i))
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
          <img src={`/images/products/${target?.id}.png`} alt="" className="aspect-video bg-white p-4 max-w-[300px] object-contain"/>
          <div>
            <h1 className="text-2xl font-bold">{target?.name}</h1>
            {categoriesArray?.map((item, i) => (
              <span key={i} className="inline-block py-4 px-1">商品カテゴリ：{item.label}</span>
            ))}
            {smallCategoriesArray?.map((item, i) => (
              <span key={i} className="inline-block py-4 px-1">小カテゴリ：{item.label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div style={{maxWidth: siteConfig.contentsWidth}} className="mx-auto py-10 px-4">
      <p>{target?.description}</p>
    </div>
    <div style={{maxWidth: siteConfig.contentsWidth}} className="mx-auto px-4">
      <h1 className="text-xl font-bold py-1 px-3 my-2 border-l-red-700 border-l-4">出展社情報</h1>
      <div className="flex flex-row gap-6 justify-start">
        {target &&
        <ExhibitorItem id={target?.exhibitorId}/>
        }
      </div>
    </div>
  </div>
  );
}

export function generateStaticParams() {
  return products.map((item) => ({
    productId: item.id,
  }));
}