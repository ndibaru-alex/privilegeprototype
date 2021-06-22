import React from 'react'
import BuildingList from './BuildingList'
import {withWorksConsumer} from '../context'


 function BuildingContainer({context}) {
    const {buildingWorks} =context
    return (
        <BuildingList buildingWorks={buildingWorks}></BuildingList>

    )
}
export default withWorksConsumer(BuildingContainer)
