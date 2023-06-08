/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const ToolsCard = ({ data }: any) => {
    return (
        <>
            {
                data.map((index: any) => (
                    <div className='course-card w-60 border border-slate-200 rounded-lg overflow-hidden my-4 mr-3 h-fit shadow-gray-300 shadow-lg' key={index.id}>
                        <div className="course-cardImage">
                            <img src={index.ToolPic} alt='product-pic' className='w-60 h-36 border-b-2 transition-all duration-1000 border-slate-300 hover:w-80 opacity-50 cursor-pointer hover:opacity-100' title={index.toolName} />
                        </div>
                        <div className="card-body px-4 grid items-center">
                            <Link href={"/"}>
                                <h1 className='text-lg font-bold text-justify' title={index.toolName}>{index.toolName.slice(0, 36)}</h1>
                            </Link>
                            <h1 className='text-justify'>{index.toolsDetail.slice(0, 47)}...</h1>
                            <button className='bg-blue-600 border-2 border-blue-400 rounded-lg text-white py-3 px-4 my-3 font-bold text-sm'>{index.btnTitle}&rarr;</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ToolsCard
