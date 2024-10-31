import Image from 'next/image'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Introduction = () => {
return (
    <div className='overflow-hidden mt-10'>
        <div className="flex">
            <p className='text-orange-500 font-extralight px-10'>_________________________________</p>
            <p className='text-3xl'>
                Pharmaceutical Machines
            </p>
            <p className='text-orange-500 font-extralight px-10'>______________________________</p>
        </div>
        <div className='text-lg text-left mt-10 ms-[0px] px-[100px] flex'>
            <div className="">
                <IoIosArrowForward className='w-[150px] h-[200px] text-orange-500 opacity-60 mt-0.5' />
            </div>
            <div className="">
                <p className='text-4xl text-gray-500 py-5 flex'>
                    <IoIosArrowForward className='text-orange-600 font-extrabold mt-0.5' />
                    Emveematic Tube Filling Machine
                </p>
                <p className='pb-10'>
                The Rotary Tube Filling and Sealing Machine is a highly efficient and versatile piece of equipment used in various industries. It is designed to automatically fill and seal tubes in a continuous rotary motion. With its advanced technology and precision, it ensures accurate filling, reliable sealing, and high production output. This machine is a reliable solution for efficient and streamlined tube packaging processes.
                <br /><br />
                We proudly offer four highly capable tube filling and sealing machines known for their efficiency. Our machines have a production range starting from as low as 35 tubes per minute and going up to 150 tubes per minute. These state-of-the-art machines have been carefully designed and built to deliver optimal performance and productivity in tube packaging processes. With our range of top-performing machines, we provide reliable solutions to meet various production needs and ensure efficient operations.
                </p>
            </div>
        </div>
    </div>
)
}

export default Introduction