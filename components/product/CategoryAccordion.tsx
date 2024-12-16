'use client'
import { ProductCategory, smallCategory } from '@/docs/product';
import React, { useState } from 'react'

interface Props {
  category: ProductCategory;
}

const CategoryAccordion = ({ category }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const targetSmallCategory = smallCategory.filter((item) => {
    return item.category.some((item) => item === category.id);
  })

  return (
    <>
      <dt onClick={() => {setIsOpen(!isOpen)}} className='flex flex-row cursor-pointer'>
        { category.label }
        <div className='relative'>
          <span className='absolute top-1/2 left-1/2 translate-x-1/2 w-2 h-[2px] bg-slate-800 -rotate-45'></span>
          <span className='absolute top-1/2 -left-1/2 w-2 h-[2px] bg-slate-800 rotate-45'></span>
        </div>
      </dt>
        { isOpen ?
      <dd>
        <ul>
          {targetSmallCategory.map((item, i) => (
            <li key={i}>
              <input id={item.id.toString()} type="checkbox" />
              <label htmlFor={item.id.toString()}>{item.label}</label>
            </li>
          ))}
        </ul>
      </dd>
        :
      <dd>
      </dd>
        }
    </>
  )
}

export default CategoryAccordion