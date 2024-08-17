import Image from 'next/image'
import React from 'react'

const Hero = () => {
return (
<div class="grid grid-cols-2 gap-4 px-[150px]">
    <div class="text-lg text-left p-4">
        <p className='py-5'>
            The Emvee Engineer is a dynamic and diversified conglomerate with a strong presence in multiple manufacturing industries, including Parking Systems, Fans, Pharmaceutical Machines, and HVAC Project Contracting. Since our establishment in 2011, we have been at the forefront of innovation and excellence, making significant strides in each sector we operate.
        </p>
        <p className='py-5'>
            At the heart of Emvee Engineers is a team that thrives on collaboration and synergy. The company's journey has been marked by a commitment to fostering a work environment that encourages creativity, innovation, and mutual support. The team is a melting pot of diverse talents, bringing together individuals with expertise in mechanical engineering, automation, software development, and customer relations.
        </p>
        <p className='py-5'>
            For seven years, Emvee Engineers has been a beacon of excellence in the manufacturing of tube filling machines. Our commitment to precision and innovation is evident in our state-of-the-art technology, customized solutions, and unwavering focus on quality assurance. At the core of our services is a customer-centric approach, offering not just machines but lasting partnerships. With a dedication to sustainability and comprehensive support, Emvee Engineers continues to lead the industry, delivering cutting-edge solutions that empower our clients to thrive in a dynamic market.
        </p>
    </div>
    <div class="p-10">
        <Image src='/AboutUs/Hero.jpg' alt='About Us Hero' width={1500} height={500} className='h-full w-full object-cover rounded-lg' />
    </div>
</div>
)
}

export default Hero