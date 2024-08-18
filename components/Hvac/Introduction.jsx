import Image from 'next/image'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Introduction = () => {
return (
    <div className='overflow-hidden -mt-10'>
        <div className="flex">
            <p className='text-orange-500 font-extralight px-10 pt-3'>______________________________</p>
            <p className='py-3.5 text-3xl'>
                Heating Ventilation
                Air Conditioning
            </p>
            <p className='text-orange-500 font-extralight px-10 pt-3'>______________________________</p>
        </div>
        <div className='text-lg text-left ms-[0px] px-[100px] flex'>
            <div className="">
                <p className='text-4xl text-gray-500 py-5 flex'>
                    <IoIosArrowForward className='text-orange-600 font-extrabold mt-0.5' />
                    Introduction
                </p>
                <p className='pb-10'>
                    Emvee Engineers welcomes you to the world of HVAC. We have been delivering excellence to hundred of our loyal customers since 2016 in this field.
                    We provide quality design, installation and service for Heating, Ventilation, and Air Conditioning (HVAC) solutions.
                    We continually strive to reduce our customer's cost of installation and service through more efficient construction, proper maintenance and innovative and creative solutions.
                </p>
            </div>
        </div>
    </div>
)
}

export default Introduction