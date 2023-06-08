import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import ProductsCard from './ProductsCard'
import data from '../json/products.json'

const Products = () => {
    return (
        <div className="CoursesCompo px-12 py-5">
            <BreadCrumbs href={'/'} breadTitle={"Products"} MoreTitle={<button>Find More &rarr;</button>} />
            <div className="flex flex-wrap items-start justify-center">
                <ProductsCard data={data}/>
            </div>
        </div>
    )
}

export default Products
