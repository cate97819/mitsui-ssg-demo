import { siteConfig } from "@/props/siteConfig";

export default function Home() {
  return (
  <div style={{marginTop: siteConfig.headerHeight + "px"}}>
    <div>
      <div className='bg-red-800 py-16'>
        <h1 style={{maxWidth: siteConfig.contentsWidth}} className='flex flex-col text-2xl mx-auto w-full text-white gap-1 px-2'>
          お知らせ
          <span className='text-sm px-0.5'>NEWS</span>
        </h1>
      </div>
    </div>
  </div>
  );
}
