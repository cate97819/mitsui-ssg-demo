import { smallCategory } from '@/docs/product';
import React from 'react'

interface Props {
  id: number;
}

const SmallCategoryLabel = ({id}: Props) => {

  

  const target = smallCategory.find((item) => {
    return id === item.id;
  })

  return (
    <li className='border-slate-800 bg-slate-800 text-white px-2 py-0.5 border-[1px]'>{target?.label}</li>
  )
}

export default SmallCategoryLabel