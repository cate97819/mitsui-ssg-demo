import { headerItem } from "@/docs";
import { exhibitors } from "@/docs/exhibitor";
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
  return exhibitors.map((item) => ({
    exhibitorId: item.id,
  }));
}