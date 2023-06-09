import Link from 'next/link'
import React from 'react'
import ImageBox from './ImageBox'
import logoPic from '@/public/img/logo.png'
import { GiHamburgerMenu, GiOldMicrophone } from 'react-icons/gi'
import { MdSearch, MdOutlineCircleNotifications, MdMoreVert } from 'react-icons/md'
import { FaRegUserCircle } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className="px-4 bg-slate-200 w-full">
            <div className="navBarComponents flex items-center justify-between">

                <div className="logo-SideBar flex items-center">
                    <div className="sideMenuPopUp-ico">
                        <b className='text-3xl cursor-pointer'><GiHamburgerMenu className='hover:bg-slate-300 rounded-full p-1' /></b>
                    </div>
                    <Link href={"/"} className='flex items-center justify-center w-36' title='Paktube Home'>
                        <b className='text-xl font-bold'>Pak</b>
                        <ImageBox ImgAltText="logo-Pic" mainBoxClass="image-box w-10 h-10" ImageSrc={logoPic} />
                        <b>Tube</b>
                    </Link>
                </div>

                <div className="serachBoxArea flex items-center">
                    <form>
                        <input type="search" name="search" title='Search'/>
                        <button className='flex items-center w-12 justify-center text-2xl' title='Search Now'><MdSearch /></button>
                    </form>
                    <div className="micRecord" title='search by voice'>
                        <b className='cursor-pointer'><GiOldMicrophone className='p-2 text-5xl hover:bg-slate-300 rounded-full my-2 ml-1' /></b>
                    </div>
                </div>

                <div className="userIntrection-box flex items-center">
                    <b><MdMoreVert /></b>
                    <b><MdOutlineCircleNotifications /></b>
                    <div>
                        <button className='border-2 rounded-xl border-slate-200 transition-all duration-1000 ease-in-out hover:border-2 hover:rounded-xl hover:border-blue-300 hover:bg-blue-500 hover:text-white'><FaRegUserCircle /><p>Sign In</p></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
