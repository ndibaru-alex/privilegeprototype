import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { PrivilegeContext } from '../context'
import {StyledEvery} from '../Components/Styled'

export default class SinglePage extends Component {
    constructor(props){
        super(props)
        this.state={
            slug:this.props.match.params.slug, 
        }
       
    }
    
    static contextType = PrivilegeContext;
    render() {
        const {getRoad} =this.context;
        const road = getRoad(this.state.slug)
        if(!road){
            return <div className='error'>
                <Hero>
                <Banner tittle='error 404' subtitle='page not found'>
                <Link to='/' className='btn-primary'>Back to Home</Link>
                </Banner>
                </Hero>
               
            </div>
        }

        const {name,type,cost,description,images}=road

        return (
            <>
            <StyledEvery img={images[0]}>
               <Banner tittle={name}>
                <Link to='/' className='btn-primary'>Back to home</Link>
               </Banner>
            </StyledEvery>
            <section className='single-work'>
                <div className="single-work-images">
                    {images.map((item,index)=>{
                        return <img key={index} src={item} alt={name}></img>
                    })}
                    <p className='desc'>{name} images</p>
                </div>
                <div className='single-work-info'>
                    <article className='desc'>
                        <h3>Description</h3>
                        <p>{description}</p>

                    </article>
                    <article className='info'>
                        <h3>more details</h3>
                        <h6>cost : ksh{cost}</h6>
                        <h6>type : {type}</h6>

                    </article>
                </div>

            </section>
            
            </>
        )
    }
}
