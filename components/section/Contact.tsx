import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-black text-white'>
      <div className='w-fit grid grid-cols-[1fr_min-content_1fr] mx-auto items-center py-10 gap-20'>
        <h2 className='text-3xl font-bold text-right py-6'>お問合わせ</h2>
        <div className='block bg-white w-[1px] h-full'></div>
        <dl className='flex flex-col gap-1'>
          <dt>三井物産流通グループフードショー2024事務局</dt>
          <dd className='text-sm text-center'>
            <Link href="mailto:foodshow2020Proposal@mitsuifoods.co.jp" className='hover:opacity-85 transition-all ease-in-out underline'>
              foodshow2020Proposal@mitsuifoods.co.jp
            </Link>
          </dd>
        </dl>
      </div>
    </div>
  )
}

export default Contact