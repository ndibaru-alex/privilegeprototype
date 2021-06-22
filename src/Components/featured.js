import React, { Component } from 'react'
import Title from './Title'
import Road from './road'
import Loading from "./Loading"
import {PrivilegeContext} from '../context'

export default class featured extends Component {
    static contextType=PrivilegeContext;
    render() {
        let {featured:roads,loading} =this.context;

        roads=roads.map(road =>{
            return<Road key={road.id} road={road}></Road>
        })
        return (
            <section className='featured-Roads'>
                <Title title='Featured works'></Title>
                <div className='featured-Roads-center'>
                    {loading ? <Loading title='Loading data'></Loading>:roads}
                </div>
                
            </section>
        )
    }
}
