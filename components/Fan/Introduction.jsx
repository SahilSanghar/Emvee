import Image from 'next/image'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Introduction = () => {
return (
    <div className='overflow-hidden mt-28'>
        <div className="flex">
            <p className='text-orange-500 font-extralight px-10'>_________________________________</p>
            <p className='py-3.5 text-3xl'>
                Mechanical Fans
            </p>
            <p className='text-orange-500 font-extralight px-10'>______________________________</p>
        </div>
        <div className='text-lg text-left ms-[0px] px-[100px] flex'>
            <div className="">
                <IoIosArrowForward className='w-[150px] h-[200px] text-orange-500 opacity-60 mt-0.5' />
            </div>
            <div className="">
                <p className='text-4xl text-gray-500 py-5 flex'>
                    <IoIosArrowForward className='text-orange-600 font-extrabold mt-0.5' />
                    Introduction
                </p>
                <p className='pb-10'>
                    Ventilation systems for car parks and
                    service areas are required to achieve two
                    objectives. 
                    Firstly, when the car park or service area
                    is in general use, it is important that the
                    exhaust gases produced by vehicles are
                    efectively removed and that there are no
                    pockets of stagnant air.
                    Secondly, in the event of a fre, assistance
                    needs to be given to the Fire Service to
                    clear smoke from the car park during and
                    after the fre.
                    Such Ventilation Systems may in addition
                    be designed to provide clear smoke free
                    acess for fre fghters to tackle the seat of
                    the fre, or alternatively to protect means
                    of escape from the car park. These more
                    complex systems are in excess of Building Regulations requirements and are
                    used as compensating features when
                    other requirements are not met.
                </p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full ms-[300px]">
            <div className="col-span-1">
                <Image src='/Parking/Intro-Img.webp' alt='Car Parking' width={500} height={100} objectFit='cover' className='' />
            </div>
            <div className="col-span-1 ps-5">
                <ul className='text-lg text-left'>
                    <li>
                        - Lifting capacity 2700kg or 2300kg.
                    </li>
                    <li>
                        - Car heights on ground up to 2050mm.
                    </li>
                    <li>
                        - Platform width up to 2500mm.
                    </li>
                    <li>
                        - Lifting height adjustable by limit switch
                    </li>
                    <li>
                        - Electric auto lock release enables easier 
                        operation. 
                    </li>
                    <li>
                        - 24v control voltage avoids electric shock
                    </li>
                    <li>
                        - Galvanized platform, high-heel friendly
                    </li>
                    <li>
                        - Bolts & nuts passing 48hrs Salt Spray Test.
                    </li>
                    <li>
                        - Driven by hydraulic cylinder + Korean lifting
                    chain
                    </li>
                    <li>
                        - Synchronization chain keeps platform level
                    under all conditions
                    </li>
                    <li>
                        - Akzo Nobel powder coating provides long lasting surficial protection
                    </li>
                    <li>
                        - Proven high end quality with CE certificate, tested by TUV.
                    </li>
                </ul>
            </div>
        </div>
    </div>
)
}

export default Introduction