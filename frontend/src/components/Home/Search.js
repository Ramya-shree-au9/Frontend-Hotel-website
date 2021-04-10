import React, { Component } from 'react'
import './Search.css'
import {withRouter} from 'react-router-dom'

const url = 'https://developerfunnel.herokuapp.com/location'
const hotelurl ='https://developerfunnel.herokuapp.com/hotels?city=';

class Search extends Component {
    constructor(){
        super()
        this.state={
            location:"",
            hotel:""
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) =>{
                return(
                    <option key={item.city} value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    handleChangeCity=(e)=>{
       const cityid = e.target.value
        fetch(`${hotelurl}${cityid}`,{method:'GET'})
        .then((response) => response.json())
        .then((data) => {
            this.setState({hotel:data})
        })
    }
   
    renderHotel=(data)=>{
         if(data){
            return data.map((item) =>{
                return(
                    <option key={item._id} value={item._id}>
                      
                        {item.name} | {item.locality} 
                     
                    </option>
                )
            })
        }
    }
    selectedHotel=(e)=>{
        this.props.history.push(`/details/${e.target.value}`)
    }

  render() {
    return (
        <div className='mainsection'>
        <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                 <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleChangeCity}> 
                     <option>-----Select Location------</option>
                    {this.renderCity(this.state.location)}
                    </select>
                     <select className="reataurantsinput" onChange={this.selectedHotel}>
                        <option>-----Select Hotel------</option>
                       {this.renderHotel(this.state.hotel)}
                    </select>
                </div>
      </div>
      </div>
    )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})   // fetching method is inbuild function
        .then((res )=> res.json())  // .then give promise. how much time take fetch the data is difficult to find
        .then((data) => {
            this.setState({location:data})
            // console.log(data)           // again used .then to recieve the data
        })
        .catch((err) => {
            console.log(err)           // again used .then to recieve the data
        })
    }
}

export default withRouter(Search)

