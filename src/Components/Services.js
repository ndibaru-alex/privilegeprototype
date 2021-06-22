import React, { Component } from 'react'
import Title from './Title'
import {FaPaintRoller,FaShuttleVan,FaBuilding,FaTruckLoading} from 'react-icons/fa'
import {GiBulldozer} from 'react-icons/gi'
import roadw from '../images/paintworks.jpeg'
import {Link} from 'react-router-dom'
export class Services extends Component {

    state={
        services:[
            {
                icon:<FaPaintRoller></FaPaintRoller>,               
                title:"Quality paint Works",
                info:"We offer quality paint works for all with our qualified labour force experienced in the many paints job we have undertaken",
                images:{roadw}
            },
            {
                icon:<GiBulldozer/>,
                title:"Quality Road Woks ",
                images:{roadw},
                info:"quality road constructon repair for all with our qualified labour force experienced in the many jobs job we have undertaken "
            },
            {
                icon:<FaBuilding/>,
                title:"Building Construction and repair",
                images:{roadw},
                info:"Provide quality costruction works and bulding repires for our clients leaving them satisfied"
            },
            {
                icon:<FaTruckLoading/>,
                title:"General supply",
                images:{roadw},
                info:"Supply of furniture,office items, electric items and computer Hardware, stationary promptly and efficiently"
            }
        ]
    }

    render() {
        return (
            <section className="services">
               <Title title=' our services'></Title>
            <div className='services-center'>
            {this.state.services.map((item,index)=>{
              return<article key={index} className='services'>
                  
                  <Link className='links'>                      
                 <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                  
                  </Link>
                  
              </article>  
            })}
            </div>
            </section>  
        )
    }
}

export default Services
