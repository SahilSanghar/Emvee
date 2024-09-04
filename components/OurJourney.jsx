"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { milestones } from '../data/journey';

gsap.registerPlugin(ScrollTrigger);

const OurJourney = () => {
  const itemsRef = useRef([]);
  const dotsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      const dot = dotsRef.current[index];
      // Initially hide the dot
      gsap.set(dot, { scale: 0 });

      // Animate the components and dots
      gsap.fromTo(
        item,
        { x: index % 2 === 0 ? "-100%" : "100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1,
          delay: index * 0.3,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 60%",
            scrub: true,
            onEnter: () => gsap.to(dot, { scale: 1, duration: 0.3 }),  // Show dot when component settles
            onLeaveBack: () => gsap.to(dot, { scale: 0, duration: 0.3 }), // Hide dot when scrolling back up
          },
        }
      );
    });

    // No animation for the trace line
  }, []);

  return (
    <section id="our-journey" className="py-16 px-[250px] bg-gray-100 relative h-[140vh]">
      <p className='text-5xl text-center'>Our Journey</p>
      <div className="container mt-[120px]">
        <div className="flex flex-col mx-auto p-2 text-blue-50">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="relative mb-8 flex justify-between items-center w-full">
              <div
                ref={el => itemsRef.current[index] = el}
                className={`w-4/12 p-4 rounded-xl shadow-md ${index % 2 === 0 ? "bg-blue-500 ml-auto" : "bg-blue-500 mr-auto"}`}
                style={{ order: index % 2 === 0 ? 1 : 2 }}
              >
                <h3 className="font-semibold text-lg mb-1">{milestone.year}</h3>
                <p className="leading-tight text-left">{milestone.description}</p>
              </div>
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b bg-orange-300"
                style={{ top: -70, bottom: 0, height: 'calc(140% - 10px)', zIndex: 1 }} // Ensure line is behind the dot
              ></div>
              <div
                ref={el => dotsRef.current[index] = el}
                className="w-6 h-6 rounded-full bg-blue-500 shadow absolute left-1/2 transform -translate-x-1/2 -translate-y-2"
                style={{ top: "50%", zIndex: 2 }} // Ensure dot is above the line
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
