import React from 'react'
import {Link} from 'react-router-dom'

export default function road({road}) {
   const {name,slug,images}=road;
    return (
        <article className='road'>
            <div className='img-container'>
            <img src={images[0]} alt='fatured'></img>
            <div className='price-top'>
                <h6>{name}</h6>
            </div>
            <Link to={`/${slug}`} className='btn-primary room-link'>more info</Link>
            </div>
        </article>
    )
}
