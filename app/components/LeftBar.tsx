import React from 'react'
import {MdHome, MdSlowMotionVideo, MdOutlineStars, MdHistory, MdOutlinePlaylistPlay, MdInfo, MdShoppingCart, MdNewspaper, MdContactMail} from 'react-icons/md'
import {FaTools} from 'react-icons/fa'
import Link from 'next/link'

const LeftBar = () => {
  return (
    <aside>
      <div className="leftBar-tabs-list">
        <ul>
            <Link href="/" title='Home'><li><MdHome className='text-2xl' /><b>Home</b></li></Link>
            <Link href="/" title='Tutor'><li><MdSlowMotionVideo className='text-2xl' /><b>Videos Tutor</b></li></Link>
            <Link href="/" title='Fav'><li><MdOutlineStars className='text-2xl' /><b>Favourite</b></li></Link>
            <hr />
            <Link href="/" title='History'><li><MdHistory className='text-2xl' /><b>History</b></li></Link>
            <Link href="/" title='Playlist'><li><MdOutlinePlaylistPlay className='text-2xl' /><b>Playlist</b></li></Link>
            <Link href="/" title='About'><li><MdInfo className='text-2xl' /><b>About</b></li></Link>
            <Link href="/" title='Shop'><li><MdShoppingCart className='text-2xl'/><b>Shop</b></li></Link>
            <hr />
            <Link href="/" title='Tool'><li><FaTools className='text-2xl' /><b>Tool</b></li></Link>
            <Link href="/" title='News'><li><MdNewspaper className='text-2xl' /><b>News</b></li></Link>
            <Link href="/" title='Contact'><li><MdContactMail className='text-2xl' /><b>Contact Us</b></li></Link>
        </ul>
      </div>
    </aside>
  )
}

export default LeftBar
