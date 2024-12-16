import Search from "@/components/product/Search";
import { siteConfig } from "@/props/siteConfig";

export default function Home() {
  return (
  <div style={{marginTop: siteConfig.headerHeight + "px"}}>
    <Search/>
  </div>
  );
}
