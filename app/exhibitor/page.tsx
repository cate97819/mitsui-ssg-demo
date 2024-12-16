import Search from "@/components/exhibitor/Search";
import { siteConfig } from "@/props/siteConfig";

export default function Home() {
  return (
  <div style={{marginTop: siteConfig.headerHeight + "px"}}>
    <Search/>
  </div>
  );
}
