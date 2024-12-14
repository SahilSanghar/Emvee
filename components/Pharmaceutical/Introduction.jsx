import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Introduction = ({ title, description, description1, highlight }) => {
return (
    <div className='overflow-hidden mt-10'>
        {/* <div className="flex">
            <p className='text-orange-500 font-extralight px-10'>_________________________________</p>
            <p className='text-3xl'>
                {title}
            </p>
            <p className='text-orange-500 font-extralight px-10'>______________________________</p>
        </div> */}
        <div className='text-lg text-left mt-10 ms-[0px] px-[100px] flex'>
            <div className="">
                <IoIosArrowForward className='w-[150px] h-[200px] text-orange-500 opacity-60 mt-0.5' />
            </div>
            <div className="">
                <p className='text-4xl text-gray-500 py-5 flex'>
                    <IoIosArrowForward className='text-orange-600 font-extrabold mt-0.5' />
                    {highlight}
                </p>
                <p className='pb-10'>
                    {description}<br /><br />
                    {description1}
                </p>
            </div>
        </div>
    </div>
)
}

export default Introduction