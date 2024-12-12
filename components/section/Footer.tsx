import { metaData } from '@/docs'
import { siteConfig } from '@/props/siteConfig'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-center py-6'>
      <img src={siteConfig.companyLogo} alt={metaData.clientName} className='max-w-[300px] w-full mx-auto'/>
    </footer>
  )
}

export default Footer