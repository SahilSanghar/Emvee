import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "/components/ui/carousel";
import heroData from '../data/hero';

const Hero = () => {
    return (
        <div className='relative' id="home">
            <Carousel className="w-full overflow-hidden" opts={{ loop: true, speed: 500, delay: 3000 }}>
                <CarouselContent>
                    {heroData.map((item, index) => (
                        <CarouselItem className="relative" key={index}>
                            <img src={item.imgSrc} alt={`Example ${index + 1}`} className="w-full h-[100vh] object-cover" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center pt-[300px] text-center text-white bg-black bg-opacity-50 p-4">
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <h2 className="text-xl font-semibold mb-2">{item.subtitle}</h2>
                                <p className="text-sm mb-5">{item.description}</p>
                                <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-4 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                                    {item.buttonText}
                                </button>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
            </Carousel>
        </div>
    );
}

export default Hero;
