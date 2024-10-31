import React from 'react'
import Hero from '/components/Parking/Hero'
import Introduction from './Introduction'
import GeneralParts from './GereralParts'
import Specification from './Specification'
import Slide from './Slide'

const Parking = () => {
return (
    <>
        <Slide />
        <Hero />
        <Introduction />
        <GeneralParts />
        <Specification />
    </>
)
}

export default Parking