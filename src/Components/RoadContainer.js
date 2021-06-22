import React from 'react'
import RoadList from './RoadList'

import {withWorksConsumer} from '../context'

 function RoadContainer({context}) {
     const {roadWorks} =context
    return (
        <RoadList roadWorks={roadWorks}></RoadList>

    )
}

export default withWorksConsumer(RoadContainer)