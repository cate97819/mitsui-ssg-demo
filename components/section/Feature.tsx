'use client'
import { siteConfig } from "@/props/siteConfig";
import React, { useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { MouseParallax, ScrollParallax } from "react-just-parallax";

const Feature = () => {
  
  return (
    <div className="py-10 relative overflow-visible">
      <div
        style={{ maxWidth: siteConfig.contentsWidth + "px" }}
        className="w-full mx-auto bg-gradient-to-tr from-gray-50 to-gray-200 p-32 text-xl text-center shadow-lg text-slate-700 rounded-xl"
      >
        <img src="/images/logo.png" alt="" className="px-20 pb-20 max-w-[800px] mx-auto"/>
        <p className="pb-20">
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
          <img src="/images/image4.jpeg" alt="" className="rounded-xl"/>
        </SplideSlide>
      </Splide>
      </div>
      <div className="absolute top-20 left-1/2 translate-x-[30em]">
        <ScrollParallax strength={0.07}>
          <img src="/images/image4.jpeg" alt="" className="max-w-[300px] rounded-full aspect-square shadow-lg border-slate-400 border-4 bg-white opacity-60"/>
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
          <div className="w-[80px] aspect-square rounded-full bg-slate-300/80">        
          </div>
        </ScrollParallax>
      </div>
      <div className="absolute top-[33em] left-1/2 translate-x-[35em]">
        <ScrollParallax strength={0.2}>
          <div className="w-[120px] aspect-square rounded-full  bg-slate-300/80">        
          </div>
        </ScrollParallax>
      </div>
      <div className="absolute top-[30em] left-1/2 translate-x-[34em]">
        <ScrollParallax strength={0.3}>
          <div className="w-[40px] aspect-square rounded-full bg-slate-300/80">        
          </div>
        </ScrollParallax>
      </div>
      <div className="absolute top-[35em] left-1/2 -translate-x-[39em]">
        <ScrollParallax strength={0.15}>
          <div className="w-[120px] aspect-square rounded-full  bg-slate-300/80">        
          </div>
        </ScrollParallax>
      </div>
    </div>
  );
};

export default Feature;
