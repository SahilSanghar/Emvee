import Image from 'next/image'
import React from 'react'

const OurJourney = () => {
  return (
    <div className="relative flex justify-center w-full">
      <Image
        src="/journey.png"
        alt="our journey"
        height={200}
        width={750}
        className=""
      />
      
      <div className="absolute top-16 left-[300px] flex flex-col justify-center text-left">
        <p className="text-4xl font-semibold">Our Journey</p>
        <p className="text-xl pt-2 w-[300px]">This is the story of our amazing journey.</p>
      </div>

      <div className="absolute w-full h-full top-0 left-0">
        {/* Circle 1 */}
        <div className="absolute top-[280px] left-[878px] w-[150px] h-[150px] bg-white rounded-full flex flex-col items-center justify-center">
          <p className="text-green-500 font-bold text-xl mr-6">2016</p>
          <p className='font-semibold'>Emvee <br />Engineers</p>
        </div>
        
        {/* Circle 2 */}
        <div className="absolute top-[580px] right-[510px] w-[140px] h-[140px] bg-white rounded-full flex flex-col items-center justify-center">
          <p className="text-green-500 font-bold text-xl mr-8">2020</p>
          <p className='font-semibold'>&nbsp; HVAC <br />&nbsp; Contracting</p>
        </div>
        
        {/* Small Circle (excluded) */}
        <div className="absolute top-[650px] right-[618px] w-[50px] h-[50px] bg-white rounded-full"></div>
        
        {/* Circle 3 */}
        <div className="absolute bottom-8 left-[705px] w-[120px] h-[120px] bg-white rounded-full flex flex-col items-center justify-center">
          <p className="text-green-500 font-bold text-xl mr-3">2024</p>
          <p className='ml-8 font-semibold'>Emvee corporation</p>
        </div>
        
        {/* Circle 4 */}
        <div className="absolute top-[445px] left-[540px] w-[130px] h-[130px] bg-white rounded-full flex flex-col items-center justify-center">
          <p className="text-green-500 font-bold text-xl mr-5">2018</p>
          <p className='font-semibold ml-8'>Emvee Foundation</p>
        </div>
        
        {/* Circle 5 */}
        <div className="absolute bottom-[190px] right-[510px] w-[140px] h-[140px] bg-white rounded-full flex flex-col items-center justify-center">
          <p className="text-green-500 font-bold text-xl mr-5">2023</p>
          <p className='font-semibold'>Emvee Engineers by create mechanical ventilation fan</p>
        </div>
        
        {/* Circle 6 */}
        <div className="absolute top-[680px] left-[580px] w-[130px] h-[130px] bg-white rounded-full flex flex-col items-center justify-center">
          <p className="text-green-500 font-bold text-xl mr-14">2021</p>
          <p className='font-semibold ml-3'>Pharmaceuticals functions</p>
        </div>
      </div>
    </div>
  )
}

export default OurJourney
