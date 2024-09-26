import Image from 'next/image'
import React from 'react'

const Vision = () => {
return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center my-5 py-10 px-24">
      {/* Left column with vertically aligned p tags */}
    <div className="flex flex-col space-y-4">
        <p className='pb-10'>Misson & Vision</p>
        <p className="text-lg text-left">Our vision is to be the global leader in the manufacture of environment friendly HVAC Pre-Insulated Panels products and we aim to achieve this goal by:</p>
        <ul className="text-lg list-disc text-left pl-5">
            <li className="">
                Creating custimer loyalty by offering quality products at competitive prices and prompt after sales services.
            </li>
            <li className="">
                Achieving total customer satisfaction by exceeding the expectations of our valuable customers.
            </li>
            <li className="">
                Being 'environmentally conscious' in areas of energy efficiency and pollution.
            </li>
        </ul>
    </div>

      {/* Right column with an image */}
    <div className="flex justify-center">
        <Image
            src="/AboutUs/Vision.jpg"
            alt="Sample Image"
            width={600}
            height={600}
            className="object-cover rounded-xl"
        />
    </div>
    </div>
)
}

export default Vision