import React, { Component } from 'react'
import Team from './team'
import {PrivilegeContext} from '../context'
import Loading from '../Components/Loading'
import Title from '../Components/Title'

export default class staff extends Component {
    static contextType=PrivilegeContext;
    render() {
        let {staff:team,loading} =this.context;
        team=team.map(staff =>{
            return<Team key={staff.id} staff={staff}></Team>
        })
        return (
            <section className='featured-Roads'>
                <Title title='our team'></Title>
                <div className='featured-Roads-center'>
                    {loading ? <Loading title='Loading data'></Loading>:team}
                </div>
                
            </section>
        )
    }
}
