import Contact from "@/components/section/Contact";
import MainVisual from "@/components/section/MainVisual";
import News from "@/components/section/News";
import Outline from "@/components/section/Outline";
import { siteConfig } from "@/props/siteConfig";

export default function Home() {
  return (
    <div style={{marginTop: siteConfig.headerHeight + "px"}}>
      <MainVisual/>
      <News/>
      <Outline/>
    </div>
  );
}
