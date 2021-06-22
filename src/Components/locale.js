import React from 'react'
import Title from '../Components/Title'
import front from '../images/viewp.jpg'

export default function locale() {
    return (
        <section className='services'>
            <Title title='Head Office' subtitle='view park towers 18th floor'></Title>
            <div className='row  '>
            
                <div className='col-4 img-container1'>
                    <img src={front}></img>
                </div>
                <div id='locale' className='col-8 '>
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818370003179!2d36.813880414613976!3d-1.2828011990643564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d23912632b%3A0xa3e642f1ab7822a8!2sView%20Park%20Towers%2C%20Utalii%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1619435267611!5m2!1sen!2ske" width="100%" height="450px" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </section>
    )
}
