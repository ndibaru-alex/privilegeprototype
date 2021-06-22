import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import Service from '../Components/Services'
import Locale from '../Components/locale'
import Featured from '../Components/featured'


export default function Home() {
    return (
       <>
       <Hero every='defaultHero'>
           <Banner tittle='Privilege capital limited'
           subtitle='for quality construction works and 
            efficient supply'
           ></Banner>
       </Hero>
       <Service></Service>
       <Featured></Featured>
       <Locale></Locale>
       </>
    )
}
