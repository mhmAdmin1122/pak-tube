/* eslint-disable @next/next/no-img-element */
import React from 'react'
import data from '../json/courses.json'

const CourseCard = () => {
    return (
        <>
            {
                data.map((index: any) => (
                    <div className='course-card w-60 border border-slate-200 rounded-lg overflow-hidden my-4 mr-3 h-fit shadow-gray-300 shadow-lg' key={index.id}>
                        <div className="course-cardImage">
                            <img src={index.CoursePick} alt='course-pic' className='w-60 h-36 border-b-2 transition-all duration-1000 border-slate-300 hover:w-80 opacity-50 cursor-pointer hover:opacity-100'/>
                        </div>
                        <div className="card-body px-4 grid items-center">
                            <h1 className='text-xl font-bold text-justify'>{index.courseTitle}</h1>
                            <h1>{index.courseDetail.slice(0, 50)}...</h1>
                            <h1>Price : <b>${index.CoursePrice}</b></h1>
                            <button className='bg-blue-600 border-2 border-blue-400 rounded-lg text-white py-3 px-4 my-3 font-bold text-lg'>More &rarr;</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default CourseCard
