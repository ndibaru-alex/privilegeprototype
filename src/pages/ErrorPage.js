import React from 'react'
import Banner from '../Components/Banner'

import Hero from '../Components/Hero'

export default function ErrorPage() {
    return (
        <div className='error'>
            <Hero>
           <Banner tittle='404 error' subtitle='page could not be found'></Banner>
           </Hero>
        </div>
    )
}
