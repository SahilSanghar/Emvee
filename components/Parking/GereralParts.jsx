import Image from 'next/image'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const GereralParts = () => {
return (
    <div className='h-[100vh]'>
        <div className="flex mt-5 py-10">
            <p className='text-orange-500 font-extralight px-10'>______________________________</p>
            <p className='py-3.5 text-3xl'>
                General Parts
            </p>
            <p className='text-orange-500 font-extralight px-10'>______________________________</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full py-10 px-32">
            {/* Left column (2/3 of the width) */}
            <div className="flex items-start justify-center">
                <Image src='/Parking/GeneralParts.png' alt='General Parts' height={500} width={500} />
            </div>
            {/* Right column (1/3 of the width) */}
            <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col items-center justify-start text-lg text-left">
                    <ul>
                        <li className='flex items-center py-1'>
                            <div className="bg-orange-600 text-white rounded-full p-0.5 h-8 w-8 text-center mr-2">1</div>
                            Carriage
                        </li>
                        <li className='flex items-center py-1'>
                            <div className="bg-orange-600 text-white rounded-full p-0.5 h-8 w-8 text-center mr-2">2</div>
                            Transparent oil tank (steel oil tank is optional)
                        </li>
                        <li className='flex items-center py-1'>
                            <div className="bg-orange-600 text-white rounded-full p-0.5 h-8 w-8 text-center mr-2">3</div>
                            Galvanized waving plate
                        </li>
                        <li className='flex items-center py-1'>
                            <div className="bg-orange-600 text-white rounded-full p-0.5 h-8 w-8 text-center mr-2">4</div>
                            Electric box
                        </li>
                        <li className='flex items-center py-1'>
                            <div className="bg-orange-600 text-white rounded-full p-0.5 h-8 w-8 text-center mr-2">5</div>
                            Key switch & emergency stop button
                        </li>
                        <li className='flex items-center py-1'>
                            <div className="bg-orange-600 text-white rounded-full p-0.5 h-8 w-8 text-center mr-2">6</div>
                            Dynamic anti-falling lock
                        </li>
                        <li className='flex items-center py-1'>
                            <div className="bg-orange-600 text-white rounded-full p-0.5 h-8 w-8 text-center mr-2">7</div>
                            Front footage
                        </li>
                        <li className='flex items-center py-1'>
                            <div className="bg-orange-600 text-white rounded-full p-0.5 h-8 w-8 text-center mr-2">8</div>
                            Limit switch
                        </li>
                        <li className='flex items-center py-1'>
                            <div className="bg-orange-600 text-white rounded-full p-0.5 h-8 w-8 text-center mr-2">9</div>
                            Power pack
                        </li>
                        <li className='flex items-center py-1'>
                            <div className="bg-orange-600 text-white rounded-full p-0.5 h-8 w-8 text-center mr-2">10</div>
                            Photocell sensor
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)
}

export default GereralParts