import { exhibitorCategory } from '@/docs/exhibitor'
import { productCategory } from '@/docs/product';
import React from 'react'

interface Props {
  id: number;
}

const CategoryLabel = ({id}: Props) => {

  

  const target = productCategory.find((item) => {
    return id === item.id;
  })

  return (
    <li className='border-slate-800 bg-slate-800 text-white px-2 py-0.5 border-[1px]'>{target?.label}</li>
  )
}

export default CategoryLabel