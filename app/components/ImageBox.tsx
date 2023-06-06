import Image from 'next/image'
import React from 'react'

const ImageBox = ({ImgAltText, mainBoxClass, ImageSrc}:any) => {
  return (
    <div className={mainBoxClass}>
      <Image src={ImageSrc} alt={ImgAltText} width={40} height={40}/>
    </div>
  )
}

export default ImageBox
