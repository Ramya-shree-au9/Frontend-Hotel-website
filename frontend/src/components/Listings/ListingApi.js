import React, { Component } from 'react'
import axios from 'axios'
import ListingDisplay from './ListingDisplay'
import Roomfilter from './Roomfilter'
import Costfilter from './Costfilter'



const url = 'https://developerfunnel.herokuapp.com/hotellist'
class listingapi extends Component {
    constructor(){
        super()
        this.state={
            hoteldata:''
        }
    }
    sortedData=(data)=>{
      this.setState({hoteldata:data})
    }
    sortedcost=(data)=>{
      if(data){
      this.setState({hoteldata:data})}
      else{
        this.setState({hoteldata:''})
      }
    }
  render() {
      console.log(this.state.hoteldata)
    return (
      <div className='container'>
        
        <div className="row">
          <center><h2  id='head'>Hotel details</h2></center>
            <div className="col-md-2">
                <Roomfilter filterdata={(data)=>{this.sortedData(data)}}/>
                <Costfilter filtercost={(data)=>{this.sortedcost(data)}}/>
            </div>
            <div className="col-md-10" >
           
            <ListingDisplay listdata={this.state.hoteldata}/>
          </div>
      </div>
      </div>
    )
  }
  componentDidMount(){
    var tripid = this.props.match.params.id;
    sessionStorage.setItem("tripid",tripid)
        axios.get(`${url}/${tripid}`)
        .then((response) => this.setState({hoteldata:response.data})) 
  }
}

export default listingapi
