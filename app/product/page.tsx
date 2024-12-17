import Search from "@/components/product/Search";
import { siteConfig } from "@/props/siteConfig";
import { Suspense } from "react";

export default function Home() {
  return (
  <div style={{marginTop: siteConfig.headerHeight + "px"}}>
    <Suspense>
      <Search/>
    </Suspense>
  </div>
  );
}
