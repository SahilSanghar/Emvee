import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

const OurJourney = () => {const data = [
  {
    title: "2016",
    content: (
      <div>
        <p className="text-white text-xs md:text-sm font-normal mb-8">
          Emvee Engineers
        </p>
      </div>
    ),
  },
  {
    title: "2018",
    content: (
      <div>
        <p className="text-white text-xs md:text-sm font-normal mb-8">
          Emvee Foundation
        </p>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div>
        <p className="text-white text-xs md:text-sm font-normal mb-8">
          HVAC Contracting
        </p>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <p className="text-white text-xs md:text-sm font-normal mb-8">
          Pharmaceuticals
        </p>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-white text-xs md:text-sm font-normal mb-8">
          Mechanical Ventilation Fans
        </p>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <p className="text-white text-xs md:text-sm font-normal mb-8">
          Emvee Corporation
        </p>
      </div>
    ),
  },
];
return (
  <div className="w-full">
    <Timeline data={data} />
  </div>
  )
}

export default OurJourney