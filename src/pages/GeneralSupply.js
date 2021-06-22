import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'
import SupplyContainer from '../Components/supplyContainer'

export default function GeneralSupply() {
    return (
        <>
         <Hero every='genSupply'>
             <Banner tittle='general suppliers'
             subtitle='supply of office furniture,electrical items, computer hardware and stationary of the highest quality 
             for our clients satisfaction'><Link to='/' className='btn-primary'>back home</Link></Banner>
             </Hero> 
             <SupplyContainer></SupplyContainer>
        </>
    )
}
