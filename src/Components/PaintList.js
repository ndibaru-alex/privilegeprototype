import React from 'react'
import Road from '../Components/road'

export default function PaintList({paintingWorks }) {
    return (
        <>
        <section className='roadslist'>
            <div className="featured-Roads-center">
                {paintingWorks .map(item=>{
                return <Road key={item.id} road={item}></Road>
                })}
            </div>

        </section>
        </>
    )
}
