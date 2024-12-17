import { siteConfig } from '@/props/siteConfig'
import React from 'react'

const Products = () => {
  return (
    <div className='py-10'>
      <div style={{maxWidth: siteConfig.contentsWidth +"px"}} className='w-full mx-auto'>
        <h2 className='flex flex-col gap-1 text-3xl font-bold border-b-2 py-2 mb-2 text-right'>
          商品一覧
          <span className='text-base px-0.5'>PRODUCTS</span>
        </h2>
      </div>
    </div>
  )
}

export default Products