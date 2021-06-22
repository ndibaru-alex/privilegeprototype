import React from 'react'
import Road from '../Components/road'

export default function BuildingList({buildingWorks}) {
    return (
        <>
        <section className='roadslist'>
            <div className="featured-Roads-center">
                {buildingWorks.map(item=>{
                return <Road key={item.id} road={item}></Road>
                })}
            </div>

        </section>
        </>
    )
}


