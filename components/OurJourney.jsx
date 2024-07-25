"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { milestones } from '../data/journey';

gsap.registerPlugin(ScrollTrigger);

const OurJourney = () => {
  const milestonesRef = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#our-journey',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    });

    milestonesRef.current.forEach((el, index) => {
      timeline.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1 },
        index * 0.2
      );
    });
  }, []);

  return (
    <section id="our-journey" className="py-16 bg-gray-100 relative h-[160vh]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          {/* Tracing Beam */}
          <div className="absolute inset-y-0 left-1/2 w-1 bg-blue-500 transform -translate-x-1/2"></div>
          {milestones.map((milestone, index) => (
            <div
              key={index}
              ref={(el) => (milestonesRef.current[index] = el)}
              className={`flex flex-col items-center w-full absolute ${
                index % 2 === 0 ? 'left-0 md:flex-row md:items-start' : 'right-0 md:flex-row-reverse md:items-start'
              } opacity-0`}
              style={{ top: `${index * 150}px` }}
            >
              <div className="mb-4 md:mb-0 md:mr-8 md:ml-8 flex flex-col items-center">
                <div className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full mb-2">
                  {milestone.year}
                </div>
                {index < milestones.length - 1 && (
                  <div className="h-8 md:h-full w-1 bg-blue-500"></div>
                )}
              </div>
              <div className="max-w-md md:max-w-none p-4 bg-white hover:shadow-lg rounded-lg">
                <h3 className="font-semibold">{milestone.year}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default OurJourney;
