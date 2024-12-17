import { Exhibitor, exhibitors } from '@/docs/exhibitor'
import { shuffleArray } from '@/libs/shuffleArray'
import { siteConfig } from '@/props/siteConfig'
import React, { useEffect, useState } from 'react'

const Exhibitors = () => {
  const [data, setData] = useState<Exhibitor[]>([]);

  useEffect(() => {
    const ary = shuffleArray(exhibitors).splice(0, 5);
    setData(ary)
  },[])
  return (
    <div className='py-10'>
      <div style={{maxWidth: siteConfig.contentsWidth +"px"}} className='w-full mx-auto'>
        <h2 className='flex flex-col gap-1 text-3xl font-bold border-b-2 py-2 mb-2'>
          出展者一覧
          <span className='text-base px-0.5'>EXHIBITORS</span>
        </h2>
        <ul className='grid grid-cols-5'>
          {data.map((item, i) => (
            <li key={i}>
              <img src={`/images/exhibitors/${item.id}.png`} alt={item.name} className=' aspect-video object-contain p-4'/>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Exhibitors