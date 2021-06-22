import React from 'react'

export default function Banner({tittle,subtitle,children}) {
    return (
        <div className='banner'>
            <h1>{tittle}</h1>
            <p>{subtitle}</p>
            <div></div>
            {children}
        </div>
    )
}
