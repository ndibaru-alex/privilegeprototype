import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import ContactForm from '../Components/ContactForm'
import Locale from '../Components/locale'
export default function Contact() {
    return (
       <>
       <Hero>
           <Banner tittle='reach us through' subtitle='incase of any querry let us know through the form bellow '></Banner>
       </Hero>
        <ContactForm></ContactForm>
        <Locale></Locale>
       </>
    )
}

