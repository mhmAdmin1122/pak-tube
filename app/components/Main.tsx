import React from 'react'
import LeftBar from './LeftBar'
import News from './News'
import BreadCrumbs from './BreadCrumbs'
import CourseCard from './CourseCard'
import Products from './Products'
import Tools from './Tools'

const Main = ({ data }: any) => {
    return (
        <main className='flex items-start w-full'>
            <LeftBar />
            <div className="main mainContent block container">
                <div className="newsCompo px-12 py-5">
                    <BreadCrumbs href={'/news'} breadTitle={"News"} MoreTitle={<button>Find More &rarr;</button>} />
                    <div className="flex flex-wrap items-start justify-center">
                        {
                            data.map((index: any) => (
                                <News key={index.source.id} data={index} urlImage={index.urlToImage} />
                            ))
                        }
                    </div>
                </div>

                <div className="CoursesCompo px-12 py-5">
                    <BreadCrumbs href={'/'} breadTitle={"Courses"} MoreTitle={<button>Find More &rarr;</button>} />
                    <div className="flex flex-wrap items-start justify-center">
                        <CourseCard />
                    </div>
                </div>

                <Products />
                <Tools />

            </div>
        </main>
    )
}

export default Main
