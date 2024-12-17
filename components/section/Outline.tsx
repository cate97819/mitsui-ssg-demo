import { metaData, outline } from '@/docs'
import { siteConfig } from '@/props/siteConfig'
import React from 'react'

const Outline = () => {
  return (
    <div>
      <div style={{maxWidth: siteConfig.contentsWidth}} className='w-full mx-auto py-20'>
        <h2 className='flex flex-col gap-1 text-3xl font-bold border-b-2 py-2 mb-2 text-center'>
          開催概要
          <span className='text-base px-0.5'>OUTLINE</span>
        </h2>
        <dl className='flex flex-col w-fit mx-auto text-nowrap gap-6'>
          <div className='grid grid-cols-[15%_1fr] gap-10'>
            <dt>名称</dt>
            <dd>{metaData.title}</dd>
          </div>
          <div className='grid grid-cols-[15%_1fr] gap-10'>
            <dt>主催</dt>
            <dd>{metaData.clientName}</dd>
          </div>
          <div className='grid grid-cols-[15%_1fr] gap-10'>
            <dt>テーマ</dt>
            <dd>{outline.theme}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Outline