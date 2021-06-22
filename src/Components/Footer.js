import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <section className='Footer'>
            <div className='footer-nav'>
        <article className='footer-article'>
            <ul className="nav-links show-nav">
            <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/apartments">Apartments</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>

            </ul>
        </article>
        
        </div>
        </section>
    )
}
