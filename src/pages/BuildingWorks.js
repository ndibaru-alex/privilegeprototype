import React from 'react'
import Hero from '../Components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../Components/Banner'
import BuildingContainer from '../Components/BuildingContainer'
export default function BuildingWorks() {
    return (
        <>
          <Hero>
          <Banner tittle="check out some of our high rise Builing Works include">
              <Link to='/' className='btn-primary'>Back home</Link>
          </Banner>
              </Hero> 
              <section className='roadslist'>
        <BuildingContainer></BuildingContainer>
      </section> 
        </>
    )
}
