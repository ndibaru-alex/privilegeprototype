import React from 'react'
import PaintList from './PaintList'
import {withWorksConsumer} from '../context'


 function PaintContainer({context}) {
    const {paintingWorks } =context
    return (
        <PaintList paintingWorks ={paintingWorks}></PaintList>
    )
}
export default withWorksConsumer(PaintContainer)