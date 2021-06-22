import React from 'react'
import Hero from '../Components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../Components/Banner'
import RoadContainer from '../Components/RoadContainer'

export default function RoadWorks() {
    return (
      <>
      <Hero>
          <Banner tittle='Some of our Road works include'>
          <Link to='/' className='btn-primary'>Back Home</Link>
          </Banner>
      </Hero>
      <section className='roadslist'>
        <RoadContainer></RoadContainer>
      </section>
      </>
    )
}
