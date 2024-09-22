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
      {/* Overlaying div with 2 p tags */}
      <div className="absolute top-16 left-[300px] flex flex-col justify-center text-left">
        <p className="text-4xl font-semibold">Our Journey</p>
        <p className="text-xl pt-2 w-[300px]">This is the story of our amazing journey.</p>
      </div>
    </div>
  )
}

export default OurJourney
