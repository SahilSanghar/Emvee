import Image from 'next/image'
import React from 'react'

const Values = () => {
return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center my-5 py-5 px-24 pb-10">

    <div className="flex justify-center">
        <Image
            src="/AboutUs/Values.jpg"
            alt="Sample Image"
            width={600}
            height={600}
            className="object-cover rounded-xl"
        />
    </div>

    <div className="flex flex-col space-y-4 text-left">
        <p className='text-center pb-10 font-semibold'>Values & Belief</p>
        <p className="text-xl font-semibold text-gray-700">
            We strive for customer satisfaction
        </p>
        <p className="text-lg pb-5">
            We are devoted to satisfy our customers by providing quality products at competitive prices.
        </p>
        <p className="text-xl font-semibold text-gray-700">
            Guarantee of Quality
        </p>
        <p className="text-lg pb-5">
            We provide the "Best in Class" products and services by continuously improving the utilization of innovative and efficient technologies.
        </p>
        <p className="text-xl font-semibold text-gray-700">
            Act with Integrity
        </p>
        <p className="text-lg">
            We endure to provide the highest standards of behavious, honesty and justice in all facets of our work.
        </p>
    </div>
    </div>
)
}

export default Values