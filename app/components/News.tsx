/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import randomPic from '../../public/img/randomPic.jpeg'

const News = ({ data, urlImage }: any) => {

  return (
    <div className='newsCard w-60 border border-slate-200 rounded-lg overflow-hidden my-3 mr-3 h-fit shadow-gray-300 shadow-lg'>

      <div className="newCardImage relative" title={data.title}>
        <img src={!urlImage ? `${randomPic}` : urlImage} alt={data.title} className='w-60 h-36 border-b-2 transition-all duration-1000 border-slate-300 hover:w-80 opacity-50 cursor-pointer hover:opacity-100' />
        <div className="badge absolute z-10 top-1 right-1 bg-pink-600 text-slate-50 px-2 py-1 rounded-sm text-sm">
          <h1>Source : <b className='font-bold'>{data.source.name}</b></h1>
        </div>
        <div className="pinDot absolute h-2 w-2 rounded-full bg-slate-50 z-20 top-1.5 right-1.5"></div>
      </div>

      <div className="newsCardBody px-4 grid items-center">
        <b className='text-slate-400'>Published At: {data.publishedAt.slice(0, 10)}</b>
        <Link href="/"><h1 className='text-xl font-bold text-justify' title={data.title}>{data.title.slice(0, 37)}...</h1></Link>
        <h4>{data.description.slice(0, 45)}....</h4>
        <Link href={data.url} className='grid items-center justify-center' target='_blank' title='Read More About on official site of news post'><button className='bg-blue-600 border-2 border-blue-400 rounded-lg text-white py-3 px-4 my-3 font-bold text-lg'>Read More &rarr;</button></Link>
      </div>
    </div>
  )
}

export default News;