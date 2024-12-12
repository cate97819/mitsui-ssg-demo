import { metaData, outline } from '@/docs'
import { siteConfig } from '@/props/siteConfig'
import React from 'react'

const News = () => {
  return (
    <div>
      <div style={{maxWidth: siteConfig.contentsWidth}} className='w-full mx-auto py-20'>
        <h2 className='flex flex-col gap-1 text-3xl font-bold border-b-2 py-2 mb-2'>
          お知らせ
          <span className='text-base'>NEWS</span>
        </h2>
      </div>
    </div>
  )
}

export default News