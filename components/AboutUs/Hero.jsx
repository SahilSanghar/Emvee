import Image from 'next/image'
import React from 'react'

const Hero = () => {
return (
<div class="grid grid-cols-2 gap-4 px-[150px]">
    <div class="text-lg text-left p-4">
        <p className='py-5'>
        Emvee Engineers was founded in year 2016 by Founder's Maulik Vyas, a visionary entrepreneur with a passion for Emvee engineering. Starting as a small firm with a handful of employees, we have grown into a leading engineering company with a global presence.                                                                               
        Emvee Engineers have continued to grow and evolve, embracing new technologies and markets. We have strengthened our commitment to sustainability and social responsibility. Our team has expanded to include top talent from around the world.
        </p>
        <p className='py-5'>
            At the heart of Emvee Engineers is a team that thrives on collaboration and synergy. The company's journey has been marked by a commitment to fostering a work environment that encourages creativity, innovation, and mutual support. The team is a melting pot of diverse talents, bringing together individuals with expertise in mechanical engineering, automation, software development, and customer relations.
        </p>
        <p className='py-5'>
            Our contemporary equipment, rigorous quality control processes and perseverance to International Quality Standards allow us to provide outstanding services to each of our valuable and esteemed clients. AIPL understands the dynamics and intricacies of different Industries and has the expertise to provide optimal solutions for industry specific requirements. AIPL has the flexibility to deliver solutions quickly and cost-effectively and our confidence in our ability to think ahead makes us willing to be measured against any business outcomes.
        </p>
    </div>
    <div class="p-10">
        <Image src='/AboutUs/Hero.jpg' alt='About Us Hero' width={1500} height={500} className='h-full w-full object-cover rounded-lg' />
    </div>
</div>
)
}

export default Hero