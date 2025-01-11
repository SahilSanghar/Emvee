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
                    Where natural ventilation is not possible, - such as where the car park is in a basement or fully enclosed, a mechanical extract system should be used. For mechanically ventilated car parks, the basic requirements are that the fan should be capable of operatic 250o for 2 hours and should be provided secondary power supply to operate in the event of a mains power failure. The design of Mechanical Ventilation system has an effect on the entire building design. Think of the shafts for extraction of pollutants and smoke. Emcee’s conceptual design will provide you the needed spaces and the locations in order to have a suitable and efficient ventilation system at the end. We strongly advice involving us in the architectural design phase
                </p>
            </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-0">
            <div className="col-span-2 grid grid-cols-2 ps-48 pt-20">
                <Image src='/Fan/axial.jpg' alt='Car Parking' width={400} height={100} objectFit='cover' className='' />
                <Image src='/Fan/axial1.jpg' alt='Car Parking' width={400} height={100} objectFit='cover' className='' />
            </div>
        </div>
        <div className="pe-10 mx-52 text-lg text-left">
                <p className='text-3xl font-semibold text-left'>
                    Axial Flow and Exhaust Fans
                </p><br />
                <p className="text-lg">
                Our axial flow fan range is distinguished by a large number of different standard designs. The different impeller hub-diameter ratios enable us to satisfy a very large range of volume flow rate/pressure combinations for most types of installations.
                </p><br />
                <p className="text-lg">
                The specific design of a fan is mainly determined by the installation in which it will be used. Beside the physical properties such as pressure, volume flow rate and temperature, the operating conditions and the installation location are of major importance (Reference DIN 24 163 for a complete description of the input parameters for a fan specification). The actual fan dimensions are mainly determined by the motors and accessories used.
                </p>
                <p className="text-lg"><br />
                The fan selection graphs allow us to make a quick selection of the axial flow fans normally used at 50 Hz. They provide the fan type, size, number of poles of the motor, shaft power and sound power.
                </p><br />
                <p className="text-lg">
                The quick selection charts/monogrammed sheets and our dimension sheets give an overview over the most commonly used axial flow fans. In addition to the shown standard fans, we also manufacture a large number of special designs, e. g. explosion proof, pump room fans, shock proof fans, smoke extract fans, jet fans etc. In case of demand for special fans please inquire.
                </p>
        </div>
        <div className="w-full">
            <div className="grid grid-cols-3 ps-48 pt-20">
                <Image src='/Fan/jet.jpg' alt='Car Parking' width={300} height={100} objectFit='cover' className='' />
                <Image src='/Fan/jet1.jpg' alt='Car Parking' width={300} height={100} objectFit='cover' className='' />
                <Image src='/Fan/jet2.jpg' alt='Car Parking' width={300} height={100} objectFit='cover' className='' />
            </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-0">
            <div className="col-span-2 grid grid-cols-2 ps-48 pt-20">
                <div className="text-lg text-left pe-12">
                    <p className="font-semibold text-3xl">Centrifugal Jet Fans</p>
                    <p className="">
                        Where natural ventilation is not possible, - such as where the car park is in a basement or fully enclosed, a mechanical extract system should be used. For mechanically ventilated car parks, the basic requirements are that the fan should be capable of operatic 250o for 2 hours and should be provided secondary power supply to operate in the event of a mains power failure. The design of Mechanical Ventilation system has an effect on the entire building design. Think of the shafts for extraction of pollutants and smoke. Emcee's conceptual design will provide you the needed spaces and the locations in order to have a suitable and efficient ventilation system at the end. We strongly advice involving us in the architectural design phase
                    </p>
                </div>
                <Image src='/Fan/bathroomfans.jpg' alt='Car Parking' width={400} height={100} objectFit='cover' className='' />
            </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-0">
            <div className="col-span-2 grid grid-cols-2 ps-48 pt-20">
                <Image src='/Fan/bathroomfans.jpg' alt='Car Parking' width={400} height={100} objectFit='cover' className='' />
                <div className="text-lg text-left pe-12">
                    <p className="font-semibold text-3xl">Bathroom Mixed Flow Fan</p>
                    <p className="">
                        Mixed flow fans are used for supply and exhaust ventilation of premises require higher pressure and low noise level. The fans are compatible with round air duct. Mixed flow fan is used for bathrooms, kitchens, shops and cafeterias etc.
                    </p>
                </div>
            </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-0">
            <div className="col-span-2 grid grid-cols-2 ps-48 pt-20">
                <div className="text-lg text-left pe-12">
                    <p className="font-semibold text-3xl">Propeller Fan
                    </p>
                    <p className="">
                    Propeller Fan is a Multi Blade Fan equipped with a CE Certified External Rotor Motor of Class F Insulation, suitable for 50Hz Applications. A Variety of Motors with 4 and 6 Poles are available in different Fan Diameters. Standard Power Supply is Single Phase; however some models are only suitable for 3Ph Power Supply only (Refer to the data sheet for more details). The fan motor is suitable for 220V±6%/50Hz electric supply for single phase models and 415V±6%/50Hz electric supply for three phase models. The Aesthetically pleasing fan is mounted on a Strong Steel Sheet with an accurately formed Orifice Ring. The Fan is protected with a Safety Wire Guard at the Air Inlet Side. The Entire Assembly is Painted in Black Colour. All Electrical Connections are housed within a Terminal Box and it is Supplied with a Power Cable.
                    Fans are primarily designed for Air Exhaust; however, they may be used in intake applications as well.
                    </p>
                </div>
                <Image src='/Fan/propeller.jpg' alt='Car Parking' width={400} height={100} objectFit='cover' className='' />
            </div>
        </div>
        <div className="col-span-2 grid grid-cols-2 ps-40 pt-20">
            <Image src='/Fan/drivecabinet.jpg' alt='Car Parking' width={400} height={100} objectFit='cover' className='' />
        <div className="text-lg text-left pe-12">
            <p className="font-semibold text-3xl">Direct Drive Cabinet Fans
            </p>
            <p className="">
                Cabinet Inline fans may be used for Ventilation and Exhaust applications for air volumes ranging from 1000CFM to 6800CFM, powered by a forward-curved, direct driven fan. The standard series has a Single skin Cabinet and the Insulated Series is supplied with high-grade acoustic egg-crate insulation, internally lined, for low noise applications.
            </p>
        </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-0">
            <div className="col-span-2 grid grid-cols-2 ps-48 pt-20">
                <div className="text-lg text-left pe-12">
                    <p className="font-semibold text-3xl">Cassette Exhaust Fan</p>
                    <ul className="list-disc list-inside">
                        <li className="">Made out of ABS Plastic.</li>
                        <li className="">Silicon steel motor with a copper winding for better performance.</li>
                        <li className="">Elegant design with a low noise level.</li>
                        <li className="">Built-in thermal cheap Rolex replica overload protector to save motor &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;burn due to overheating.</li>
                    </ul>
                </div>
                <Image src='/Fan/cassette.jpg' alt='Car Parking' width={400} height={100} objectFit='cover' className='' />
            </div>
        </div>
        <div className="col-span-2 grid grid-cols-2 ps-40 pt-20">
            <Image src='/Fan/circularfans.jpg' alt='Car Parking' width={400} height={100} objectFit='cover' className='' />
        <div className="text-lg text-left pe-12">
            <p className="font-semibold text-3xl">Circular Inline Fans
            </p>
            <p className="">
                centrifugal Inline fans are suitable for ventilating in commercial and industrial applications such as toilets, bathrooms, cafeterias, laundry rooms in hotels and offices. It is meant for ducted systems requiring high air capacities.
            </p>
        </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-0">
            <div className="col-span-2 grid grid-cols-2 ps-48 pt-20">
                <div className="text-lg text-left pe-12">
                    <p className="font-semibold text-3xl">Cabinet fan 
                    </p>
                    <p className="">
                    Cabinet Fans may be used for intake or exhaust ventilation applications where noise levels are the primary selection criteria or where restricted space is available for fan mounting.
                    Fans are equipped with speed modulation and have a standard filter arrangement for bottom loading 25mm thick filters.
                    It is ideal for applications where fan is required directly overhead the occupied space. The Fan inlets and outlets are Round.
                    </p>
                </div>
                <Image src='/Fan/cabinet.jpg' alt='Car Parking' width={400} height={100} objectFit='cover' className='' />
            </div>
        </div>
        <div className="col-span-2 grid grid-cols-2 ps-40 pt-20">
            <Image src='/Fan/kfan.jpg' alt='Car Parking' width={400} height={100} objectFit='cover' className='' />
        <div className="text-lg text-left pe-12">
            <p className="font-semibold text-3xl">Kitchen Exhaust Fan
            </p>
            <p className="">
                Direct Driven Fans are an economic alternative to the belt driven fans since Backward Curved Aerofoil Impeller is mounted directly on the motor shaft. You save on the cost of bearings, shaft, pulleys & belts, fans are available in 6 sizes in capacity up to about 15000 CMH.
            </p>
        </div>
        </div>
        <p className="font-semibold">Computational Fluid Dynamic Analysis</p>
        <div className="w-full grid grid-cols-2 gap-0">
            <div className="col-span-2 grid grid-cols-2 ps-48 pt-20">
                <Image src='/Fan/cfd.jpg' alt='Car Parking' width={400} height={100} objectFit='cover' className='' />
                <Image src='/Fan/cfd1.jpg' alt='Car Parking' width={400} height={100} objectFit='cover' className='' />
            </div>
        </div>
        <div className="mx-52 text-lg text-left">
            <p className="">
                Design of impulse systems is usually proven by use of CFD (Computational Fluid Dynamic) analysis. This allows detailed computation of airflow in car parks, taking in to account the often complex geometry of individual buildings. This is often essential to demonstrate to the local authority that designs and sizing of fan is done satisfactorily. CFD modelling has the objective of confirming the viability of the ventilation scheme. Emvee offers CFD modelling of the system and a full technical report for local authority approval prior to installation. Since CFD is a key component of car park ventilation design, and there has been inadequate guidance on this element. We have complete in house facility of CFD which makes it easier for us to validate our designs and for building bodies to sanction them.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-20">
        <Image src='/Fan/cfd3.jpg' alt='Car Parking' width={1000} height={800} objectFit='cover' className='w-[300px] mx-auto' />
        <Image src='/Fan/cfd4.jpg' alt='Car Parking' width={1000} height={800} objectFit='cover' className='w-[500px] mx-auto' />
        </div>
        {/* <div className="text-lg text-left">
            <p className="text-xl">JET FANS EXTRACT FANS
            </p>
            <p className="">
                In recent years jet fan or impulse technology has established itself as the new standard in car park ventilation. Impulse ventilation systems are an alternative to ducted mechanical extract systems, overcoming many of the problems associated with such systems. A series of jet fans mounted under the ceiling, induce air movement to pre designed extract points moving smoke and fumes with it. The number and location of fans are carefully chosen to match the system design requirements and in order to there are no dead spots for fumes and smoke to stagnate and collect. Few benefits are listed below
            </p>
        </div> */}
    </div>
)
}

export default Introduction