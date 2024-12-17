'use client'
import { Product, products } from '@/docs/product';
import { shuffleArray } from '@/libs/shuffleArray';
import { siteConfig } from '@/props/siteConfig'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const ary = shuffleArray(products).splice(0, 5);
    setData(ary)
  },[])

  return (
    <div className='py-10'>
      <div style={{maxWidth: siteConfig.contentsWidth +"px"}} className='w-full mx-auto'>
        <h2 className='flex flex-col gap-1 text-3xl font-bold border-b-2 py-2 mb-2 text-right'>
          商品一覧
          <span className='text-base px-0.5'>PRODUCTS</span>
        </h2>
        <ul className='grid grid-cols-5 py-4 gap-4'>
          {data.map((item, i) => (
            <li key={i} className='p-4 shadow-md hover:shadow-xl transition-all ease-in-out duration-300'>
              <Link href={`/exhibitor/${item.id}`}>
                <img src={`/images/exhibitors/${item.id}.png`} alt={item.name} className=' aspect-video object-contain p-4'/>
                <span className='text-sm'>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Products