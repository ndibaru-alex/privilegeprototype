import React from 'react'
import Road from './road'

export default function supplyList({supply}) {
    return (
        <section className='roadslist'>
             <div className='featured-Roads-center'>
                {supply.map(item=>{
                    return <Road key={item.id} road={item}></Road>
                })}
             </div>
            
        </section>
    )
}
  