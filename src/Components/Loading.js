import React from 'react'
import loadingF from '../images/gif/loading-gear.gif'
export default function Loading({title}) {
    return (
        <div className='loading'>
            <h4>{title} </h4>
          <img src={loadingF} alt="hold on hold on!"></img>
        </div>
    )
}
