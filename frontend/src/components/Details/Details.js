import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Link} from 'react-router-dom'


const url = 'https://developerfunnel.herokuapp.com/hotelsdetails/'
const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

export class Details extends Component {
  constructor(){
    super()
    this.state={
      hotel:'',
      tripid:sessionStorage.getItem('tripid')
    }
  }
  render() {
    sessionStorage.setItem("hotelname",this.state.hotel.name)
    const {hotel}=this.state
    return (
      <div>
      
      <div className="container">
         <div className="panel panel-primary">
            <div className="panel-heading"></div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
             
                  <h2 id='head'>Hotel Details</h2>
                  <div style={{margin:'2%'}}>
                  <Link to={`/list/${this.state.tripid}`} className='text-right btn btn-danger'>Back</Link>
                  </div>
            </div>   
        <div>
        
        <Slider {...settings}>
          <div className='row'>
            <div className="col-md-6 ">
            <img src={hotel.thumb} style={{width:'1140px',height:'400px'}} alt='abc'></img>
            <h2 style={{color:"orange"}}>{hotel.name}</h2>
            </div>
          </div>
          <div>
          <img style={{width:'1150px',height:'400px'}} src='https://i.ibb.co/pv8Kf4m/roseate.jpg' alt=''></img>
          </div>
          <div>
          <img style={{width:'1150px',height:'400px'}} src='https://i.ibb.co/55nZq20/itcmaratha.jpg' alt=''></img>
          </div>
         
        </Slider>
      </div>
      <Tabs style={{color:'black',marginLeft:'1%'}}>
              <TabList>
                <Tab>Address</Tab>
                <Tab>Cost</Tab>
                <Tab>Aminities</Tab>
              </TabList>

              <TabPanel>
                <h4>{hotel.locality}</h4>
                <h4>{hotel.address}</h4>
              </TabPanel>
              <TabPanel>
                <h3>Rs.{hotel.cost} </h3>
              </TabPanel>
              <TabPanel>
              <h4>
                  <span className="glyphicon glyphicon-road"></span> Parking<br/>
                  <span className="glyphicon glyphicon-fire"></span> Bone Fire
              </h4>
              </TabPanel>
            </Tabs>   
            <h2><Link to={`/booking/${hotel._id}`} className='btn btn-success' style={{marginLeft:'1%'}}>Place Booking</Link></h2>
      </div>
      </div>
      </div>
    )
  }
  componentDidMount(){
    var roomid = this.props.match.params.id
    
    axios.get(`${url}${roomid}`)
    .then((res)=>{
        this.setState({hotel:res.data[0]})
     
    })
    
  }
}

export default Details


