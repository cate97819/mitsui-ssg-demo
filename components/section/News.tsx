import { newsContents } from '@/docs/news'
import { siteConfig } from '@/props/siteConfig'
import React from 'react'

const News = () => {
  return (
    <div>
      <div style={{maxWidth: siteConfig.contentsWidth}} className='w-full mx-auto py-20'>
        <h2 className='flex flex-col gap-1 text-3xl font-bold border-b-2 py-2 mb-2'>
          お知らせ
          <span className='text-base px-0.5'>NEWS</span>
        </h2>
        <ul className='flex flex-col gap-2'>
          {newsContents.map((item, i) => (
            <li key={i} className='border-b-[1px] border-b-slate-200 py-3 px-2'>
              <span className='text-[#D71517] font-bold text-sm'>{item.date}</span>
              <h3 className='font-bold text-base'>{item.content}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default News