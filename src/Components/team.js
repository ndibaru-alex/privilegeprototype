      import React from 'react'
      
      export default function team({staff}) {
             const{name,position,description,images}=staff
          return (
              <article>
                <div className='img-container'>
                <img src={images[0]} alt='staff'></img>
                <div className='price-top'><h6>{name}</h6></div>
                </div>
                
                <p className='apartment-info'>{description}</p>
              </article>
          )
      }
      