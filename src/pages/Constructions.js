import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import BuildContainer from '../Components/BuildingContainer'

import PaintContainer from '../Components/PaintContainer'
import RoadContainer from '../Components/RoadContainer'

export default function Constructions() {
    return (
       <>
       <Hero>
           <Banner tittle='Our customers satisfaction is our goal'
           subtitle='Scroll down to see some of our high quality construction works'>
               <Link to='/' className='btn-primary'>back to home</Link>
           </Banner>
       </Hero>
       <section className='roadslist'>
        <BuildContainer></BuildContainer>
        <RoadContainer></RoadContainer>
        <PaintContainer></PaintContainer>
       </section>
       
       </>
    )
}
