'use client'
import { siteConfig } from "@/props/siteConfig";
import React from "react";
import { Splide, SplideSlide } from 'react-splide-ts';
import "react-splide-ts/css";
import { ScrollParallax } from "react-just-parallax";

const Feature = () => {
  
  return (
    <div className="py-10 relative overflow-visible">
      <div
        style={{ maxWidth: siteConfig.contentsWidth + "px" }}
        className="w-full mx-auto p-32 text-xl text-center shadow-2xl text-slate-900 rounded-full"
      >
        <img src="/images/logo.png" alt="" className="px-20 pb-20 max-w-[800px] mx-auto"/>
        <p className="pb-20 font-[300] leading-10">
          「三井物産流通グループ
          フードショー」は三井物産流通グループ(株)が開催する食の総合展示会です。
          <br />
          出展メーカー約500社の新商品に加え、当社オリジナル商品や食のトレンドが
          <br />
          一堂に集結し、全国よりご来場いただく多数の小売業・飲食業様との
          <br />
          出会いの場となっております。
          <br />
          <br />
          今回は「明日（みらい）をつくる
          みんなのチカラ」をテーマに、弊社グループが
          <br />
          取り扱う幅広い食品カテゴリーから、魅力ある提案をお届け致します。
        </p>
        <Splide data-splide='{"type":"loop","autoplay":"true","perPage":"3","gap":"1em"}' aria-label="お気に入りの写真" className='w-full max-h-[650px] object-cover overflow-clip max-w-[800px] mx-auto'>
        <SplideSlide>
          <img src="/images/image1.jpg" alt="" className="rounded-xl"/>
        </SplideSlide>
        <SplideSlide>
          <img src="/images/image2.jpg" alt="" className="rounded-xl"/>
        </SplideSlide>
        <SplideSlide>
          <img src="/images/image3.jpg" alt="" className="rounded-xl"/>
        </SplideSlide>
        <SplideSlide>
          <img src="/images/image4.jpg" alt="" className="rounded-xl"/>
        </SplideSlide>
      </Splide>
      </div>
      <div className="absolute top-20 left-1/2 translate-x-[30em]">
        <ScrollParallax strength={0.07}>
          <img src="/images/image4.jpg" alt="" className="max-w-[300px] rounded-full aspect-square shadow-lg border-slate-400 border-4 bg-white opacity-60"/>
        </ScrollParallax>
      </div>
      <div className="absolute top-80 left-1/2 -translate-x-[55em]">
        <ScrollParallax strength={0.05}>
          <img src="/images/image5.jpg" alt="" className=" max-w-[350px] rounded-full aspect-square shadow-2xl border-slate-400 border-4 bg-white opacity-75"/>
        </ScrollParallax>
      </div>
      <div className="absolute top-[45em] left-1/2 translate-x-[27em]">
        <ScrollParallax strength={0.04}>
          <img src="/images/image3.jpg" alt="" className=" max-w-[400px] rounded-full aspect-square shadow-2xl border-slate-400 border-4 bg-white opacity-75"/>
        </ScrollParallax>
      </div>
      <div className="absolute top-[13em] left-1/2 -translate-x-[32em]">
        <ScrollParallax strength={0.25}>
          <div className="w-[80px] aspect-square rounded-full bg-pink-100/40 blur-sm">        
          </div>
        </ScrollParallax>
      </div>
      <div className="absolute top-[28em] left-1/2 translate-x-[35em]">
        <ScrollParallax strength={0.2}>
          <div className="w-[120px] aspect-square rounded-full  bg-slate-300/60 blur-none">        
          </div>
        </ScrollParallax>
      </div>
      <div className="absolute top-[22em] left-1/2 -translate-x-[36em] -z-10">
        <ScrollParallax strength={0.3}>
          <div className="w-[100px] aspect-square rounded-full bg-blue-100/50 blur-sm">        
          </div>
        </ScrollParallax>
      </div>
      <div className="absolute top-[50em] left-1/2 -translate-x-[40em] -z-10">
        <ScrollParallax strength={0.3}>
          <div className="w-[40px] aspect-square rounded-full bg-lime-800/10 blur-sm">        
          </div>
        </ScrollParallax>
      </div>
      <div className="absolute top-[47em] left-1/2 -translate-x-[54em]">
        <ScrollParallax strength={0.25}>
          <div className="w-[120px] aspect-square rounded-full  bg-yellow-200/20 blur-none">        
          </div>
        </ScrollParallax>
      </div>
    </div>
  );
};

export default Feature;