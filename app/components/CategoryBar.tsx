'use client'
import React from 'react'
import Slider from "react-slick";
import data from '../json/categoryList.json'
import Link from 'next/link';

const CategoryBar = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <aside className='w-full flex items-center justify-center my-3'>
            <Slider {...settings} className='container'>
                {data.map((category) => {
                    return (
                        <div key={category.id}>
                            <Link href={"/"}><h3>{category.category}</h3></Link>
                        </div>
                    )
                })}
            </Slider>
        </aside>
    )
}

export default CategoryBar
