"use client";
import React from 'react';
import dynamic from 'next/dynamic'; // Import the dynamic function

// Import the LocationMap component dynamically
const LocationMap = dynamic(() => import('./LocationMap'), {
  ssr: false, // Disable server-side rendering for this component
});

const Surat = () => {
return (
    <div className='h-[120vh] pt-[150px] grid lg:grid-cols-2 md:grid-cols-1 text-center text-4xl sm:mx-[100px] max-sm:h-[200vh] max-sm:mx-8 md:mx-[140px] md:h-[180vh] sm:h-[190vh] lg:h-[120vh] lg:mx-[100px]'>
    <div>
        {/* Replace the Image component with LocationMap */}
        <LocationMap />
    </div>
    <div className='text-lg text-left pt-10 sm:pl-[50px] max-sm:px-20'>
        <p className='py-2 font-bold text-2xl'>
            Emvee Engineer Pvt Ltd
        </p>
        <p className='py-2 pt-10'>
            <span className='font-semibold'>Contact Number: </span>&nbsp;09510520896
        </p>
        <p className='py-2'>
            <span className='font-semibold'>Email: </span>&nbsp;sales@emvee.co.in
        </p>
        <p className='py-2'>
            <span className='font-semibold'>Address: </span>&nbsp;221, The Grand Plaza, <br />
            VIP Road, Vesu, Surat - 395007
        </p>
    </div>
    </div>
);
};

export default Surat;