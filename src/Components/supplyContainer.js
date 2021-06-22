import React from 'react'
import SupplyList from './supplyList'

import {withWorksConsumer} from '../context'

 function supplyContainer({context}) {
     const{supply}=context
    return (
        <SupplyList supply={supply} ></SupplyList>
    )
}

export default withWorksConsumer(supplyContainer)
