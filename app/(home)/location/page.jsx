import Image from 'next/image'
import React from 'react'

const location = () => {
return (
    <div className='h-[120vh] pt-[150px] grid lg:grid-cols-2 md:grid-cols-1 text-center text-4xl sm:mx-[100px] max-sm:h-[200vh] max-sm:mx-8 md:mx-[140px] md:h-[180vh] sm:h-[190vh] lg:h-[120vh] lg:mx-[100px]'>
        <div>
            <Image src='/map.jpg' alt='location' width={200} height={150} className='h-[500px] w-[500px] object-cover rounded-lg' />
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
                <span className='font-semibold'>Address: </span>&nbsp;pushpavrund industrial hub, <br />
                nr. Hathijan Circle, Vatva, <br />
                Ahmedabad, Gujarat 382425
            </p>
        </div>
    </div>
)
}

export default location