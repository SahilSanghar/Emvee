import Image from 'next/image'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Introduction = () => {
return (
    <div className='overflow-hidden -mt-2'>
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
                    We would like to introduce ourselves as HVAC Project Execution Firm, who pride ourselves in our quality of work and customer satisfaction. We have a host of satisfied clients thanks to meticulously and successfully carried out projects in various sectors. Our commitment lies not only in completion of the project but building ties that last. Most of our clients would vouch for our prompt service even after the projects were long completed and our attention to detail.
                </p>
                <p className="">
                    Emvee is an authorized Sales and Service Dealer for Carrier Air-Conditioning. We have rich experience with widely used complex systems like Chillers, Variable Refrigerant Flow (VRF) Systems.
                </p>
                <p className="">
                    Emvee provides start to end services for HVAC automation, air-conditioning, ventilation, modular clean rooms, and maintenance after sales. We ensure our services are cost-effective and catering all the requirements of the client. We provide services to both public and private sector organizations in diverse field of infrastructure, IT, Pharma, Healthcare, Printing & packaging, Hospitality, Industries and Residential. Our services don’t end at project execution; we provide efficient post execution assistance to clients. We help our clients by providing them training to handle the systems for better maintenance of the project
                </p>
            </div>
        </div>
    </div>
)
}

export default Introduction