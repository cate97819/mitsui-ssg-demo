import Link from 'next/link'
import React from 'react'

interface Props {
  index: number;
  item: {
    label: string;
    href: string;
  };
  invalid: boolean;
  setHoverHandler: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

const HeaderItem = ({index, item, invalid, setHoverHandler}: Props) => {
  
  if (invalid) {
    // 現在のパスとリンク先が一致
    return (
      <li>
        <button id={index.toString()} className='px-2 text-slate-700' onMouseEnter={setHoverHandler}>
          {item.label}
        </button>
        <span className='relative -bottom-1 h-0.5 w-full bg-[#D71517] block rounded-full'></span>
      </li>
    )
  }
  return (
    // 現在のパスとリンク先が異なる
    <>
      <li className='group relative' >
        <Link id={index.toString()} href={item.href} onMouseEnter={setHoverHandler} className='px-2 group-hover:text-slate-700 transition-all ease-in-out'>
          {item.label}
        </Link>
        <span className='absolute left-1/2 -bottom-1 h-0.5 w-0 group-hover:w-full group-hover:left-0 bg-[#D71517] block transition-all ease-in-out rounded-full'></span>
      </li>
    </>
  )

}

export default HeaderItem