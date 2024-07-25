import { Business } from '@/components/BusinessCard'
import Events from '@/components/Events'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { MainNavbar } from '@/components/Navbar'
import OurJourney from '@/components/OurJourney'
import Welcome from '@/components/Welcome'
import React from 'react'

const Home = () => {
return (
    <div>
        {/* <MainNavbar /> */}
        <Hero />
        <Welcome />
        <OurJourney />
        <Business />
        <Events />
        {/* <Footer /> */}
    </div>
)
}

export default Home