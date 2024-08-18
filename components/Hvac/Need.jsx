import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Need = () => {
return (
    <div className='grid grid-cols-1 lg:grid-cols-2 text-lg text-left px-[280px] py-[100px]'>
        <div className="">
            <ul>
                <span className='text-2xl'>Our Services</span>
                <li className='pt-5 flex'>
                    <IoIosArrowForward className='text-orange-600 font-extrabold mt-1' />
                    Commercial Air Conditioning
                </li>
                    <li className='ms-5'>
                        ( 1 ) VRF System
                    </li>
                    <li className='ms-5'>
                        ( 2 ) Chiller Based System
                    </li>
                <li className='pt-1.5 flex'>
                    <IoIosArrowForward className='text-orange-600 font-extrabold mt-1' />
                    Mechanical Ventilation
                </li>
                <li className='pt-1.5 flex'>
                    <IoIosArrowForward className='text-orange-600 font-extrabold mt-1' />
                    System Design And Analysis
                </li>
            </ul>
        </div>
        <div className="">
            <ul>
                <span className='text-2xl'>Need of HVAC System</span>
                <li className='pt-5 flex'>
                    <IoIosArrowForward className='text-orange-600 font-extrabold mt-1' />
                    Control of Air temperature
                </li>
                <li className='pt-2 flex'>
                    <IoIosArrowForward className='text-orange-600 font-extrabold mt-1' />
                    Control of moisture content in the Air
                </li>
                <li className='pt-2 flex'>
                    <IoIosArrowForward className='text-orange-600 font-extrabold mt-1' />
                    To hold the air contamination within acceptable limits
                </li>
                <li className='pt-2 flex'>
                    <IoIosArrowForward className='text-orange-600 font-extrabold mt-1' />
                    To help maintain good indoor air quality
                </li>
            </ul>
        </div>
    </div>
)
}

export default Need