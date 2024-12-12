import { headerItem } from '@/docs';
import { siteConfig } from '@/props/siteConfig';
import Link from 'next/link';
import React from 'react'

export const HeaderMenu = (index: number) => {

  const menus = [(
    // ホーム
    <></>
  ),(
    // 主催者企画
    <></>
  ),(
    // 出展者一覧
    <div
      style={{ maxWidth: siteConfig.contentsWidth }}
      className="w-full mx-auto p-4 flex flex-col gap-1"
    >
      <h2 className='flex flex-row gap-8 border-l-2 border-[#D71517] px-3 font-bold mx-2 items-end'>
        出展者一覧
        <Link href={headerItem[2].href} className='group flex flex-row text-xs gap-2 p-1 hover:cursor-pointer w-fit underline'>
          一覧をみる
          <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
        </Link>
      </h2>
      <dl className='flex flex-row gap-6 p-2'>
        <div className='flex flex-col gap-1 bg-white p-2 rounded-lg'>
          <dt className='text-sm font-bold px-2 pt-2'>出展ゾーンから探す</dt>
          <dd>
            <ul className='flex flex-col text-sm p-2 gap-1'>
              <li className='group flex flex-row items-center gap-1 text-sm hover:cursor-pointer transition-all ease-in-out'>
                総合（市販用）ゾーン
                <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
              </li>
              <li className='group flex flex-row items-center gap-1 text-sm hover:cursor-pointer transition-all ease-in-out'>
                市販用ゾーン
                <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
              </li>
              <li className='group flex flex-row items-center gap-1 text-sm hover:cursor-pointer transition-all ease-in-out'>
                業務用ゾーン
                <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
              </li>
              <li className='group flex flex-row items-center gap-1 text-sm hover:cursor-pointer transition-all ease-in-out'>
                ペットゾーン
                <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
              </li>
              <li className='group flex flex-row items-center gap-1 text-sm hover:cursor-pointer transition-all ease-in-out'>
                酒類ゾーン
                <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
              </li>
              <li className='group flex flex-row items-center gap-1 text-sm hover:cursor-pointer transition-all ease-in-out'>
                にっぽん元気マーケット
                <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
              </li>
              <li className='group flex flex-row items-center gap-1 text-sm hover:cursor-pointer transition-all ease-in-out'>
                日配ゾーン
                <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
              </li>
              <li className='group flex flex-row items-center gap-1 text-sm hover:cursor-pointer transition-all ease-in-out'>
                惣菜ゾーン
                <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
              </li>
              <li className='group flex flex-row items-center gap-1 text-sm hover:cursor-pointer transition-all ease-in-out'>
                生鮮ゾーン
                <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
              </li>
            </ul>
          </dd>
        </div>
        <div className='flex flex-col gap-1 p-2'>
          <dt className='group flex flex-row items-center gap-1 text-sm font-bold p-2 hover:cursor-pointer transition-all ease-in-out'>
            輸出対応可能な事業者を探す
            <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
          </dt>
          
        </div>
        <div className='flex flex-col gap-1 p-2'>
          <dt className='group flex flex-row items-center gap-1 text-sm font-bold p-2 hover:cursor-pointer transition-all ease-in-out'>
            環境に配慮した事業者を探す
            <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
          </dt>
        </div>
      </dl>
    </div>
  ),(
    // 商品一覧
    <div
      style={{ maxWidth: siteConfig.contentsWidth }}
      className="w-full mx-auto p-4 flex flex-col gap-1"
    >
      <h2 className='flex flex-row gap-6 border-l-2 border-[#D71517] px-3 font-bold mx-2 items-end'>
        商品一覧
        <Link href={headerItem[3].href} className='group flex flex-row text-xs gap-2 p-1 hover:cursor-pointer w-fit underline'>
          一覧をみる
          <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
        </Link>
      </h2>
      <div className='flex flex-col gap-1'>
        <div>
          <ul className='flex flex-col text-sm p-2 gap-3'>
            <li className='flex flex-col gap-1 bg-white rounded-lg px-4 py-2'>
              <span className='group flex flex-row items-center gap-1 text-sm hover:cursor-pointer transition-all ease-in-out font-bold'>
                加工食品
                <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
              </span>
              <ul className='flex flex-row flex-wrap gap-x-2 gap-y-1'>
                {["調味料","食用油","スプレッド類","乳製品","調理品","スープ","冷凍食品","缶詰","粉類","ホームメイキング材料","麺類","パン・シリアル類","穀物","加工肉類","練り製品","漬物・佃煮","水物","惣菜類","農産乾物","加工水産","その他加工食品"].map((item, i) => (
                  <li key={i} className='text-xs text-slate-800'>#{item}</li>
                ))}
              </ul>
            </li>
            <li className='flex flex-col gap-1 bg-white rounded-lg px-4 py-2'>
              <span className='group flex flex-row items-center gap-1 text-sm hover:cursor-pointer transition-all ease-in-out font-bold'>
                生鮮食品
                <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
              </span>
              <ul className='flex flex-row flex-wrap gap-x-2 gap-y-1'>
                {["水産","畜産","農産","その他生鮮食品"].map((item, i) => (
                  <li key={i} className='text-xs text-slate-800'>#{item}</li>
                ))}
              </ul>
            </li>
            <li className='flex flex-col gap-1 bg-white rounded-lg px-4 py-2'>
              <span className='group flex flex-row items-center gap-1 text-sm hover:cursor-pointer transition-all ease-in-out font-bold'>
                菓子類
                <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
              </span>
              <ul className='flex flex-row flex-wrap gap-x-2 gap-y-1'>
                {["菓子","デザート・ヨーグルト","珍味","アイスクリーム類","その他菓子類"].map((item, i) => (
                  <li key={i} className='text-xs text-slate-800'>#{item}</li>
                ))}
              </ul>
            </li>
            <li className='flex flex-col gap-1 bg-white rounded-lg px-4 py-2'>
              <span className='group flex flex-row items-center gap-1 text-sm hover:cursor-pointer transition-all ease-in-out font-bold'>
                飲料
                <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
              </span>
              <ul className='flex flex-row flex-wrap gap-x-2 gap-y-1'>
                {["嗜好飲料","果実飲料","清涼飲料","乳飲料"].map((item, i) => (
                  <li key={i} className='text-xs text-slate-800'>#{item}</li>
                ))}
              </ul>
            </li>
            <li className='flex flex-col gap-1 bg-white rounded-lg px-4 py-2'>
              <span className='group flex flex-row items-center gap-1 text-sm hover:cursor-pointer transition-all ease-in-out font-bold'>
                酒類
                <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
              </span>
              <ul className='flex flex-row flex-wrap gap-x-2 gap-y-1'>
                {["清酒","合成清酒","焼酎（甲類）","焼酎（乙類）","みりん","ビール","果実酒","甘味果実酒","ウィスキー","ブランデー","スピリッツ","スピリッツ（発泡性）","リキュール類","リキュール類（発泡性）","発泡酒","粉末種","その他雑酒","その他雑酒（発泡性）","その他アルコール類"].map((item, i) => (
                  <li key={i} className='text-xs text-slate-800'>#{item}</li>
                ))}
              </ul>
            </li>
            <li className='flex flex-col gap-1 bg-white rounded-lg px-4 py-2'>
              <span className='group flex flex-row items-center gap-1 text-sm hover:cursor-pointer transition-all ease-in-out font-bold'>
                その他食品
                <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
              </span>
              <ul className='flex flex-row flex-wrap gap-x-2 gap-y-1'>
                {["乳幼児食品","健康食品"].map((item, i) => (
                  <li key={i} className='text-xs text-slate-800'>#{item}</li>
                ))}
              </ul>
            </li>
            <li className='flex flex-col gap-1 bg-white rounded-lg px-4 py-2'>
              <span className='group flex flex-row items-center gap-1 text-sm hover:cursor-pointer transition-all ease-in-out font-bold'>
              ペット用品
                <img src="/images/chevron-right.svg" alt="" className='relative w-4 top-[0.1em] -left-1 group-hover:left-0 transition-all ease-in-out'/>
              </span>
              <ul className='flex flex-row flex-wrap gap-x-2 gap-y-1'>
                {["犬","猫","観賞魚","小鳥","小動物","昆虫","爬虫類・両生類","その他ペット"].map((item, i) => (
                  <li key={i} className='text-xs text-slate-800'>#{item}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ),(
    // 来場登録
    <></>
  )]

  return menus[index];
}