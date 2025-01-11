import React from 'react'
import Hero from './Hero'
import Intro from './Intro'
import Categories from './Categories'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

const Parking = () => {
return (
    <div>
        <Hero />
        <div className="bg-gray-200 text-black font-light text-lg h-20 flex items-center justify-center relative -top-14">
            <Link href='/'>Home</Link>
            <FaChevronRight className='font-light' />
            <Link href='/parking' className='font-medium'>Parking</Link>
        </div>
        <Intro />
        <Categories />
    </div>
)
}

export default Parking