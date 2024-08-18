import Image from 'next/image'
import React from 'react'

const IntroImage = () => {
return (
    <div className='grid grid-cols-1 gap-0 lg:grid-cols-2 px-[100px]'>
        <Image src='/Hvac/Intro1.webp' alt='Ventilation' width={1500} height={1000} className='w-[40vw] h-[50vh] rounded-lg object-cover' />
        <Image src='/Hvac/Intro2.jpg' alt='Ventilation' width={1500} height={1000} className='w-[40vw] rounded-lg object-cover' />
    </div>
)
}

export default IntroImage