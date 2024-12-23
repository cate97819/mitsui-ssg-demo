import { exhibitors } from '@/docs/exhibitor'
import Link from 'next/link'
import React from 'react'

interface Props {
  id: string;
}

const ExhibitorItem = ({id}: Props) => {

  const target = exhibitors.find((item) => (
    item.id === id
  ))

  return (
    <div className='flex flex-col justify-center text-center items-center bg-slate-100 p-4 rounded-lg group'>
      <Link href={`/exhibitor/${id}`} className='flex flex-col gap-2'>
        <img src={`/images/exhibitors/${target?.id}.png`} className='aspect-video p-2 object-contain bg-white max-w-[300px] group-hover:opacity-85 transition-all ease-in-out' alt="" />
        <span className=' group-hover:opacity-85 transition-all ease-in-out'>
          {target?.name}
        </span>
      </Link>
    </div>
  )
}

export default ExhibitorItem