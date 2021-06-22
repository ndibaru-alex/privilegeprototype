import React from 'react'
import Hero from '../Components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../Components/Banner'
import PaintWorks from '../Components/PaintContainer'

export default function PaintingWorks() {
    return (
        <>
        <Hero>
            <Banner tittle='Some of our high quality paint jobs are '><Link to='/'  className='btn-primary'>back home</Link></Banner>
        </Hero>
        <section className='roadslist'>
       <PaintWorks></PaintWorks>
      </section>
            
        </>
    )
}
