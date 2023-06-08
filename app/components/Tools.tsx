import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import ToolsCard from './ToolsCard'
import data from '../json/tools.json'
const Tools = () => {
    return (
        <div className='px-12 py-5'>
            <BreadCrumbs href={'/'} breadTitle={"Tools"} MoreTitle={<button>Find More Tools&rarr;</button>} />
            <div className="flex flex-wrap items-start justify-center">
                <ToolsCard data={data} />
            </div>
        </div>
    )
}

export default Tools
