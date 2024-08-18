import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Specification = () => {
return (
    <div>
        <div className="flex mt-5 py-10">
            <p className='text-orange-500 font-extralight px-10'>___________________________________</p>
            <p className='py-3.5 text-3xl'>
                Specifications
            </p>
            <p className='text-orange-500 font-extralight px-10'>__________________________________</p>
        </div>
        {/* General */}
        <div className="border-b-2 border-gray-400 mb-4 mx-[128px]">
            <p className='text-4xl text-gray-500 py-2 flex justify-start'>
                <IoIosArrowForward className='text-orange-600 font-extrabold mt-0.5' />
                General
            </p>
        </div>
        <div className="grid grid-cols-3 gap-2 px-32 text-xl">
            {/* First Div */}
            <div className="col-span-1">
                <ul className='text-center text-lg'>
                    <p className='bg-gray-500 text-white'>Model</p>
                    <li className='bg-orange-100 my-1'>
                        Vehicles parked per unit
                    </li>
                    <li className='bg-orange-100 my-1'>
                        Rated capacity
                    </li>
                    <li className='bg-orange-100 my-1'>
                        Available car length
                    </li>
                    <li className='bg-orange-100 my-1'>
                        Available car width
                    </li>
                    <li className='bg-orange-100 my-1'>
                        Available car height
                    </li>
                    <li className='bg-orange-100 my-1'>
                        Drive mode
                    </li>
                    <li className='bg-orange-100 my-1'>
                        Operation
                    </li>
                    <li className='bg-orange-100 my-1'>
                        Lifting speed
                    </li>
                    <li className='bg-orange-100 my-1'>
                        Descending speed
                    </li>
                    <li className='bg-orange-100 my-1'>
                        Power supply
                    </li>
                    <li className='bg-orange-100 my-1'>
                        Finishing
                    </li>
                </ul>
            </div>

            {/* Second Div */}
            <div className="col-span-1 col-start-2">
                <ul className='text-center text-lg'>
                    <p className='bg-gray-500 text-white'>
                        Park-Easy 9527
                    </p>
                    <li className='bg-gray-100 my-1'>
                        2
                    </li>
                    <li className='bg-gray-300 my-1'>
                        2700kg
                    </li>
                    <li className='bg-gray-100 my-1'>
                        5000mm
                    </li>
                    <li className='bg-gray-300 my-1'>
                        1850mm
                    </li>
                    <li className='bg-gray-100 my-1'>
                        2050mm
                    </li>
                    <li className='bg-gray-300 my-1'>
                        Hydraulic cylinder + chains
                    </li>
                    <li className='bg-gray-100 my-1'>
                        Key switch
                    </li>
                    <li className='bg-gray-300 my-1'>
                        &lt;50s
                    </li>
                    <li className='bg-gray-100 my-1'>
                        &lt;35s
                    </li>
                    <li className='bg-gray-300 my-1'>
                        100-480v, 1/3P, 50/60Hz
                    </li>
                    <li className='bg-gray-100 my-1'>
                        Finishing
                    </li>
                </ul>
            </div>

            {/* Third Div */}
            <div className="col-span-1 col-start-3">
                <ul className='text-center text-lg'>
                    <p className='bg-gray-500 text-white'>
                        Park-Easy 9527
                    </p>
                    <li className='bg-gray-100 my-1'>
                        2
                    </li>
                    <li className='bg-gray-300 my-1'>
                        2700kg
                    </li>
                    <li className='bg-gray-100 my-1'>
                        5000mm
                    </li>
                    <li className='bg-gray-300 my-1'>
                        1850mm
                    </li>
                    <li className='bg-gray-100 my-1'>
                        2050mm
                    </li>
                    <li className='bg-gray-300 my-1'>
                        Hydraulic cylinder + chains
                    </li>
                    <li className='bg-gray-100 my-1'>
                        Key switch
                    </li>
                    <li className='bg-gray-300 my-1'>
                        &lt;50s
                    </li>
                    <li className='bg-gray-100 my-1'>
                        &lt;35s
                    </li>
                    <li className='bg-gray-300 my-1'>
                        100-480v, 1/3P, 50/60Hz
                    </li>
                    <li className='bg-gray-100 my-1'>
                        Finishing
                    </li>
                </ul>
            </div>
        </div>
        {/* Hydraulic */}
        <div className="border-b-2 border-gray-400 mt-16 mb-10 mx-[128px]">
            <p className='text-4xl text-gray-500 py-2 flex justify-start'>
                <IoIosArrowForward className='text-orange-600 font-extrabold mt-0.5' />
                Hydraulic
            </p>
        </div>
        <div className="grid grid-cols-3 gap-2 px-32 text-xl pb-20">
            {/* First Div */}
            <div className="col-span-1">
                <ul className='text-center text-lg'>
                    <p className='bg-gray-500 text-white'>Model</p>
                    <li className='bg-orange-100 my-1'>
                        Pump motor power
                    </li>
                    <li className='bg-orange-100 my-1'>
                        Pump flow
                    </li>
                    <li className='bg-orange-100 my-1'>
                        Pump working pressure
                    </li>
                    <li className='bg-orange-100 my-1'>
                        Hydraulic cylinder
                    </li>
                    <li className='bg-orange-100 my-1'>
                        Hydraulic oil
                    </li>
                    <li className='bg-orange-100 my-1'>
                        Lifting chain
                    </li>
                    <li className='bg-orange-100 my-1'>
                        Balance chain
                    </li>
                </ul>
            </div>

            {/* Second Div */}
            <div className="col-span-1 col-start-2">
                <ul className='text-center text-lg'>
                    <p className='bg-gray-500 text-white'>
                        Park-Easy 9527
                    </p>
                    <li className='bg-gray-100 my-1'>
                        2.2Kw
                    </li>
                    <li className='bg-gray-300 my-1'>
                        2.6ML/r
                    </li>
                    <li className='bg-gray-100 my-1'>
                        16-17MPa
                    </li>
                    <li className='bg-gray-300 my-1'>
                        Italian Aston seals
                    </li>
                    <li className='bg-gray-100 my-1'>
                        L-HV 46#
                    </li>
                    <li className='bg-gray-300 my-1'>
                        LH1266
                    </li>
                    <li className='bg-gray-100 my-1'>
                        LH1066
                    </li>
                </ul>
            </div>

            {/* Third Div */}
            <div className="col-span-1 col-start-3">
                <ul className='text-center text-lg'>
                    <p className='bg-gray-500 text-white'>
                        Park-Easy 9527
                    </p>
                    <li className='bg-gray-100 my-1'>
                        2.2Kw
                    </li>
                    <li className='bg-gray-300 my-1'>
                        2.6ML/r
                    </li>
                    <li className='bg-gray-100 my-1'>
                        16-17MPa
                    </li>
                    <li className='bg-gray-300 my-1'>
                        Italian Aston seals
                    </li>
                    <li className='bg-gray-100 my-1'>
                        L-HV 46#
                    </li>
                    <li className='bg-gray-300 my-1'>
                        LH1266
                    </li>
                    <li className='bg-gray-100 my-1'>
                        LH1066
                    </li>
                </ul>
            </div>
        </div>
    </div>
)
}

export default Specification