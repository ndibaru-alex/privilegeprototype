import React, { Component } from 'react'
 import client from './contentfull'

 
const PrivilegeContext = React.createContext();
 class PrivilegeProvider  extends Component {
     state={
         roads:[],
         featured:[],
         staff:[],
         loading:false,
         roadWorks:[],
         paintingWorks :[],
         buildingWorks:[],
         supply:[],

     }

     getData = async ()=> {
         try{
          let response = await client.getEntries({
              content_type:'privilegecapital',
              order:"sys.createdAt"
          });
        let roads = this.formatData(response.items)
        let featured=roads.filter(road=>road.featured===true)
        let staff=roads.filter(road=>road.type==='staff')
        let roadWorks=roads.filter(road=>road.type==='roadWorks')
        let paintingWorks =roads.filter(road=>road.type==='paintingWorks ')
        let buildingWorks=roads.filter(road=>road.type==='buildingWorks')
        let supply=roads.filter(road=>road.type==='supply')

        this.setState({
            roads,
            featured,
            roadWorks,
            paintingWorks,
            buildingWorks,
            staff,
            supply,               
        })

         }catch(error){
             console.log(error)
         }
     }

     componentDidMount(){
         this.getData()
     }
     
     getRoad = slug =>{
         let tempRoads=[...this.state.roads]
         const road = tempRoads.find(road =>road.slug===slug)
         return road;
     }

     formatData(items){
        let tempItems = items.map(item=>{
           let id =item.sys.id;
           let images =item.fields.images.map(image =>
               image.fields.file.url
           );
           let road ={...item.fields,images,id};
           return road;
        })
        return tempItems;
     }
    render() {
        return (
            < PrivilegeContext.Provider value={{...this.state,
             getRoad:this.getRoad,
                }}>   
                {this.props.children}
                </ PrivilegeContext.Provider>
        )
    }
}
const PrivilegeConsumer = PrivilegeContext.Consumer;

export function withWorksConsumer(Component){
    return function consumerWrappr(props){
        return<PrivilegeConsumer>
            {value =><Component {...props} context={value}/>}
        </PrivilegeConsumer>
    }
}

export { PrivilegeContext, PrivilegeProvider, PrivilegeConsumer}
