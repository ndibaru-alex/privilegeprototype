import React from 'react'
import Road from '../Components/road'

export default function RoadList({roadWorks}) {
    return (
        <>
        <section className='roadslist'>
            <div className="featured-Roads-center">
                {roadWorks.map(item=>{
                return <Road key={item.id} road={item}></Road>
                })}
            </div>

        </section>
        </>
    )
}
