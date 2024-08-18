import Image from 'next/image'
import React from 'react'

const Body = () => {
return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-32 ms-28 mt-32">
    <div className="relative w-32 h-32">
        <Image 
            src="/AboutUs/1.png" 
            alt="Image 1" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg mx-12"
        />
        <p className='text-lg text-left mt-40 w-[15vw]'>
            Safety , Quality, Research and Development
        </p>
    </div>
    <div className="relative w-32 h-32">
        <Image 
            src="/AboutUs/2.png" 
            alt="Image 2" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg mx-12"
        />
        <p className='text-lg text-left mt-40 w-[20vw]'>
            Industry 4.0 - Industry Plan - Business - Transition 4.0
        </p>
    </div>
    <div className="relative -top-8 w-48 h-48">
        <Image 
            src="/AboutUs/3.jpg" 
            alt="Image 3" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg"
        />
        <p className='text-lg text-left mt-48'>
            Timely and Efficient Assistance
        </p>
    </div>
</div>
)
}

export default Body