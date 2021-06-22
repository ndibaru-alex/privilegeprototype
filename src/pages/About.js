import React from 'react'
import Hero from '../Components/Hero'
import Staff from '../Components/staff'
import Banner from '../Components/Banner'
import {AboutStatement} from '../Components/MenuItems'
import {Link} from 'react-router-dom'


export default function About() {
    return (
        <>
        <Hero>
            <Banner tittle='we deliver quality'
            subtitle='leading construction and general supply company in kenya
            that delivers high quality  work to our many clients all over the country
            we are here for you and customer satisfaction is our goal  '
            >
            <Link to='/construction' className='btn-primary'>Check out some of our works </Link>
            </Banner>
        </Hero>
        <section className='services'>
        <div className='mission-center '>
        {AboutStatement.map((item,index)=>{
           return <article key={index}  className='services links'>
               <span><h4>{item.title}</h4></span>
               <p>{item.subtitle}</p>
           </article>
        })}
        </div>
        </section>
        
        <section className='content'>
            <Banner tittle='History' 
            subtitle=" years of operation -9 years with a 300 million turnover for the last three years.
              "
            >
                <h6 className='desc'> SUPPLIES</h6>
                <p>- Supply of Furniture, Office Items, Electrical 		Items and Computer Hardware,Stationery</p>
                <h6 className='desc'> ROAD WORKS</h6>
                <p>- KeRRA, CDFs, Nairobi County </p>
                <h6 className='desc'> BUILDING WOKS</h6>
                <p>Zetech Univesity, Embakasi South Kwa-Reuben Stadium,KRA-CBC Building,Kenya Airports Authority(KAA), Micro Small Enterprises Authority(Msea)</p>
                <h6 className='desc'>WATER WORKS</h6>
                <p>Baringo County Government(Drilling of boreholes)</p>
            </Banner>
        </section>
        <Staff></Staff>
        
           
        </>
    )
}
