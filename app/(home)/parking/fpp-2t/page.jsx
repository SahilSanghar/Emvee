"use client";

import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

const FPP = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("details"); // State for active tab

  const slides = [
    "/Parking/FPP.webp",
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
    }
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
    <div className="relative -top-14 h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Parking/hero.jpg" // Replace with your image URL
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
      </div>

      {/* Content */}
      <h2 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center">
        Dual Platform Four-Post Double Car Lift
      </h2>
    </div>
    <div className="relative -top-14 bg-gray-200 text-black font-light text-lg h-20 flex items-center justify-center">
      <Link href='/'>Home</Link>
      <FaChevronRight className='font-light' />
      <Link href='/parking' className=''>Parking</Link>
      <FaChevronRight className='font-light' />
      <Link href='/fpp-2t' className='font-medium'>Dual Platform Four-Post Double Car Lift</Link>
    </div>
    <div className="text-center -mt-5">
      <p className="text-xl">Dual Platform Four-Post Double Car Lift</p>
      <p className="pt-2">FPP-2T</p>
    </div>
    <div className="max-w-[80%] overflow-hidden mx-auto -mt-10">
      {/* Main Image Slider */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div className="flex-[0_0_100%] relative top-10" key={index}>
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  width={1000}
                  height={200}
                  className="w-fit h-[60vh] mx-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Left/Right Arrows */}
        <button
          className="absolute top-[110%] left-[40%] -translate-y-1/2 text-black/50 rounded-full p-2"
          onClick={scrollPrev}
        >
          &lt;
        </button>
        <button
          className="absolute top-[110%] right-[40%] -translate-y-1/2 text-black/50 rounded-full p-2"
          onClick={scrollNext}
        >
          &gt;
        </button>
      </div>

      {/* Thumbnail Previews */}
      <div className="flex mt-4 justify-center space-x-2">
        {slides.map((thumb, index) => (
          <button
            key={index}
            className={`w-16 h-16 border-2 ${
              selectedIndex === index ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          >
            <img src={thumb} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Tabs for Details and Tags */}
      <div className="mt-6">
        <div className="flex justify-center space-x-4">
          <button
            className={`px-4 py-2 text-3xl ${
              activeTab === "details"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
          <button
            className={`px-4 py-2 text-3xl ${
              activeTab === "tags"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("tags")}
          >
            Tags
          </button>
        </div>

        {/* Conditional Rendering for Tab Content */}
        <div className="mt-4">
          {activeTab === "details" && (
            <div className="">
              {/* <div className="bg-blue-800 h-6 my-5">
                <div className="bg-blue-400 h-5 w-7 rotate-45 relative top-[0.585rem] left-[43.65%] -z-20"></div>
                <div className="bg-blue-400 w-36 h-12 relative -top-8 left-[45%]">
                  <p className="text-xl font-semibold px-3 py-1.5 text-white">Introduction</p>
                </div>
                <div className="bg-blue-400 h-5 w-7 rotate-45 relative -top-[4.55rem] left-[55.95%] -z-20"></div>
              </div> */}
              <div className="relative bg-blue-800 rounded-full h-6 my-10">
  <div className="bg-blue-400 rounded-full w-40 h-11 absolute top-[-0.6rem] left-[50%] transform -translate-x-1/2">
    <p className="text-xl font-semibold px-[1.35rem] py-2 text-white">Introduction</p>
  </div>
              </div>
              <p className="mt-2 text-gray-700 pb-5">
              They say more is better than less. Confirmation of this comes with our four-post twin platforms parking lift. FPP-2T, "2 above + 2 below" parking spaces with a capacity of 4 tons together, provides maximum opportunities for parking & storing up to 4 cars. Multiple safety devises ensure reliable and stable operation and the elimination of middle posts makes it a great space-saver.
              </p>
              <ul className="">
                <li className="">- Double-wide design for 4 vehicles</li>
                <li className="">- Dependent parking
                </li>
                <li className="">- 4000kg overall lifting capacity
                </li>
                <li className="">- Ground car height: 1750mm
                </li>
                <li className="">- Hidden single hydraulic cylinder
                </li>
                <li className="">- Increased sheave diameter reduces cable fatigue
                </li>
                <li className="">- Mechanical anti-falling locks allow multiple stopping heights
                </li>
                <li className="">- Low wear, proven hydraulic technology
                </li>
                <li className="">- Position of control panel is adjustable
                </li>
                <li className="">- Protective device against loosening and breaking of steel rope
                </li>
                <li className="">- Surface treatment: powder coating</li>
              </ul>
              <div className="relative bg-blue-800 rounded-full h-6 my-10">
  <div className="bg-blue-400 rounded-full w-40 h-11 absolute top-[-0.6rem] left-[50%] transform -translate-x-1/2">
    <p className="text-xl font-semibold px-[1.35rem] py-2 text-white">Specification</p>
  </div>
              </div>
              <div className="overflow-x-auto mt-6">
              <table className="min-w-full border border-gray-300">
        <tbody>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="text-left px-4 py-2 border-b">Model</td>
            <td className="text-center px-4 py-2 border-b">FPP-2T
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="text-left px-4 py-2 border-b">Lifting capacity	</td>
            <td className="text-center px-4 py-2 border-b">4000kg
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="text-left px-4 py-2 border-b">Lifting height	</td>
            <td className="text-center px-4 py-2 border-b">2000mm
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="text-left px-4 py-2 border-b">Usable platform width</td>
            <td className="text-center px-4 py-2 border-b">1952mm</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="text-left px-4 py-2 border-b">Available voltage of power supply	</td>
            <td className="text-center px-4 py-2 border-b">100V-480V, 1 or 3 Phase, 50/60Hz
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="text-left px-4 py-2 border-b">Operation mode	</td>
            <td className="text-center px-4 py-2 border-b">Key switch
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="text-left px-4 py-2 border-b">Operation voltage	</td>
            <td className="text-center px-4 py-2 border-b">24V</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="text-left px-4 py-2 border-b">Safety lock	</td>
            <td className="text-center px-4 py-2 border-b">Dynamic anti-falling lock
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="text-left px-4 py-2 border-b">Lock release	</td>
            <td className="text-center px-4 py-2 border-b">Electric auto release
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="text-left px-4 py-2 border-b">Finishing</td>
            <td className="text-center px-4 py-2 border-b">Powder coating
            </td>
          </tr>
        </tbody>
              </table>
              </div>
              <div className="relative bg-blue-800 rounded-full h-6 my-10">
                <div className="bg-blue-400 rounded-full w-64 h-11 absolute top-[-0.6rem] left-[50%] transform -translate-x-1/2">
                  <p className="text-xl font-semibold px-[1.6rem] py-2 text-white">Dimensional Drawing</p>
                </div>
              </div>
              <Image src='/Parking/drawing.png' alt="Drawing" height={100} width={1200} className="w-full" />
              <div className="relative bg-blue-800 rounded-full h-6 my-10">
                <div className="bg-blue-400 rounded-full w-64 h-11 absolute top-[-0.6rem] left-[50%] transform -translate-x-1/2">
                  <p className="text-xl font-semibold px-[1.6rem] py-2 text-white">Design Showcase</p>
                </div>
              </div>
              <div className="relative w-full h-96">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/Parking/s1.jpg")' }}></div>

      {/* Overlay Text */}
      <div className="relative z-10 px-5 py-5 flex flex-col justify-center items-center w-full h-[90%] text-2xl font-semibold">
        <p className="text-xl px-5 py-5 rounded-lg backdrop-blur-lg opacity-70 bg-gray-200">New design control system <br />
        <span className="text-sm">The operation is simpler, the use is safer, <br /> and the failure rate is reduced by 50%.</span></p>
      </div>
              </div>
              <div className="bg-black text-center text-white">
                <p className="relative top-20 text-xl">Auto lock release system</p>
                <p className="relative top-20 text-sm">The safety locks can be released automatically when the user operate to make the platform down</p>
                <Image src='/Parking/s2.jpg' alt="S 2" height={100} width={1200} />
              </div>
              <div className="bg-black text-white text-center h-[80vh]">
                <p className="text-xl  bg-black">Gentle metallic touch, excellent surface finishing
                </p>
                <p className="text-sm bg-black pb-14">After applying AkzoNobel powder, color saturation, weather resistance and <br /> its adhesion are significantly enhanced
                </p>
                <Image src='/Parking/s3.jpg' alt="s 3" height={500} width={1200} className="" />
                <Image src='/Parking/s4.jpg' alt="s 4" width={1200} height={100} />
                <div className="relative -top-[88rem] right-[18rem] text-black">
                  <p className="">Dynamic locking device
                  </p>
                  <p className="text-xs">There are full range mechanical anti-falling locks on the <br />post to protect the platform from falling</p>
                </div>
                <div className="relative -top-[56rem] left-[18rem] text-black">
                  <p className="">More stable electric motors
                  </p>
                  <p className="text-xs">Newly upgraded power pack unit system</p>
                </div>
                <div className="relative -top-[26rem] right-[18rem] text-black">
                  <p className="">Galvanized screw bolts based on the <br /> European standard</p>
                  <p className="text-xs">Longer lifetime, much higher corrosion resistance</p>
                </div>
              <div className="text-center -mt-32 py-10 text-black h-[40vh]">
                <p className="text-xl">Laser cutting + Robotic welding</p>
                <p className="text-sm">Accurate laser cutting improves the accuracy of the parts, and <br />automated robotic welding makes the weld joints more firm and beautiful</p>
                <Image src='/Parking/s6.jpg' alt="S 2" height={100} width={1200} />
              </div>
              </div>
              <div className="relative bg-blue-800 rounded-full h-6 my-10 mt-[185rem]">
                <div className="bg-blue-400 rounded-full w-56 h-11 absolute top-[-0.6rem] left-[50%] transform -translate-x-1/2">
                  <p className="text-xl font-semibold px-[1.62rem] py-2 text-white">Project Reference</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
                <Image src='/Parking/pr1.jpg' alt="pr1" width={700} height={200} />
                <Image src='/Parking/pr2.jpg' alt="pr2" width={700} height={200} />
                <Image src='/Parking/pr3.jpg' alt="pr3" width={700} height={200} />
                <Image src='/Parking/pr4.jpg' alt="pr4" width={700} height={200} />
              </div>
              <Image src='/Parking/pr5.jpg' alt="pr5" width={1250} height={200} className="mt-5" />
              <button className="bg-gray-300 hover:bg-orange-600 text-white px-5 py-3 rounded-full border-2 border-double outline-2 outline-double outline-black mx-[39%] my-7 transition duration-500 ease-in-out">Download Product Datasheet</button>
            </div>
          )}
          {activeTab === "tags" && (
            <div>
              {/* <p className="text-xl font-semibold">Product Tags</p> */}
              <ul className="mt-2 text-gray-700">
                <li className="">Tag</li>
                <li className="">Tag</li>
                <li className="">Tag</li>
                <li className="">Tag</li>
                <li className="">Tag</li>
              </ul>
            </div>
          )}
        </div>

        <form className="bg-gray-100 rounded-xl hover:shadow-md mt-5 mb-10 transition duration-500 ease-in-out">
  <div className="mb-4">
    <p className="bg-blue-950 rounded-t-xl text-white py-3 ps-5">Leave Your Message</p>
    <input
      type="text"
      id="name"
      name="name"
      className="w-[96%] px-3 py-2 mx-3 mt-5 border-l-2 border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="Enter your name"
    />
  </div>
  <div className="mb-4">
    <input
      type="email"
      id="email"
      name="email"
      className="w-[96%] px-3 py-2 mx-3 border-l-2 border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="Enter your email"
    />
  </div>
  <div className="mb-4">
    <input
      type="tel"
      id="phone"
      name="phone"
      className="w-[96%] px-3 py-2 mx-3 border-l-2 border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="Enter your phone number"
    />
  </div>
  <div className="mb-4">
    <textarea
      id="msg"
      name="msg"
      rows="4"
      className="w-[96%] px-3 py-2 mx-3 border-l-2 border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="Enter your message"
    ></textarea>
  </div>
  <button
    type="submit"
    className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2 rounded-xl transition duration-300 ease-in-out w-[96%] mx-3 mb-3"
  >
    Submit
  </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default FPP;
