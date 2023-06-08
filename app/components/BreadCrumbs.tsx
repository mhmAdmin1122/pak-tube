import Link from 'next/link'
import React from 'react'

const BreadCrumbs = ({href, breadTitle, MoreTitle}:any) => {
  return (
    <div className='flex items-center justify-between bg-slate-300 text-black px-3 py-2 rounded-lg font-bold shadow-lg shadow-gray-300'>
      <h1>{breadTitle}</h1>  
      <Link href={href}>{MoreTitle}</Link>
    </div>
  )
}

export default BreadCrumbs
