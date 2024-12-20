import Search from "@/components/exhibitor/Search";
import { siteConfig } from "@/props/siteConfig";
import { Suspense } from "react";

export default function Home() {
  return (
  <div style={{marginTop: siteConfig.headerHeight + "px"}} className="w-full">
    <Suspense>
      <Search/>
    </Suspense>
  </div>
  );
}
