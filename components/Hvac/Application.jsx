import Image from 'next/image';
import React from 'react';

const Application = () => {
return (
    <>
    <div className="flex">
        <p className="text-orange-500 font-extralight px-10 pt-0.5">_____________________________________</p>
        <p className="py-3.5 text-3xl">Applications</p>
        <p className="text-orange-500 font-extralight px-10 pt-0.5">__________________________________</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 px-20 py-10 gap-4">
        <div className="transform transition-transform duration-300 ease-in-out hover:scale-110">
            <Image src="/Hvac/mall.png" alt="Mall" width={100} height={1000} className="cursor-pointer" />
        </div>
        <div className="transform transition-transform duration-300 ease-in-out hover:scale-110">
            <Image src="/Hvac/hotel.png" alt="Hotel" width={100} height={1000} className="cursor-pointer" />
        </div>
        <div className="transform transition-transform duration-300 ease-in-out hover:scale-110">
            <Image src="/Hvac/hospital.png" alt="Hospital" width={100} height={1000} className="cursor-pointer" />
        </div>
        <div className="transform transition-transform duration-300 ease-in-out hover:scale-110">
            <Image src="/Hvac/cinema.png" alt="Cinema" width={100} height={1000} className="cursor-pointer" />
        </div>
        <div className="transform transition-transform duration-300 ease-in-out hover:scale-110">
            <Image src="/Hvac/office.png" alt="Office" width={100} height={1000} className="cursor-pointer" />
        </div>
        <div className="transform transition-transform duration-300 ease-in-out hover:scale-110">
            <Image src="/Hvac/factory.png" alt="Factory" width={100} height={1000} className="cursor-pointer" />
        </div>
    </div>
    </>
);
};

export default Application;
