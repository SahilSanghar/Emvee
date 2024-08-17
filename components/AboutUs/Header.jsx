import { Fullscreen } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
return (
    <div className='relative -top-10'>
        <Image src='/AboutUs/about-us-banner.jpg' alt='About Us Banner' width={1500} height={100} className='w-[100vw] h-[50vh]' />
        <p className='absolute top-[150px] inset-x-10 text-6xl font-semibold text-white'>
            About Us
        </p>
    </div>
)
}

export default Header