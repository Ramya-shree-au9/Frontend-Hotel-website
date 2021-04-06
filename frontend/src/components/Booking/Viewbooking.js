import React, { Component } from 'react'
import axios from 'axios'
import Displaybooking from './Displaybooking'

const url ='http://localhost:5000/api/auth/bookings'
const hotelname ='https://developerfunnel.herokuapp.com/hotels?city='
class Viewbooking extends Component {
    constructor(){
        super()
        this.state={
            booking:'',
            Hname:'',
            seleHotel:'',
            filtered:'',
            date:''
        }
    }
    renderHotelname=(data)=>{
      if(data){
        return data.map((item)=>{
          return(
            <option value={item.name}>{item.name}</option>
          )
        })
      }
    }
    HotelName=(e)=>{
      console.log(e.target.value)
      this.setState({seleHotel:e.target.value})
      
      const output = this.state.booking.filter((data)=>{
        return ((data.hotelName) === 
        (e.target.value))
        })
        this.setState({filtered:output})
            
        }
   
    selectedDate=(e)=>{
      console.log(e.target.value)
      this.setState({date:e.target.value})

      const output = this.state.booking.filter((data)=>{
        return ((data.date) === 
        (e.target.value))
        })
        this.setState({filtered:output})
    }
    
    // Logoutfun=()=>{
    //   sessionStorage.removeItem('token')
      
    //   // this.props.history.push('/login')
    // }
  render() {
    console.log('hotelname',this.state.filtered)
    if (!sessionStorage.getItem('token')){
      this.props.history.push('/login')
    }
    return (
      <div>
      
      <div className='container'>
      <select onClick={this.HotelName} style={{padding:'8px'}}>
          <option>------SELECT HOTEL------</option>
          {this.renderHotelname(this.state.Hname)}
        </select> &nbsp;
        <input  style={{padding:'5px',float:'right'}} type='date' onChange={this.selectedDate} value={this.state.date}></input>
        <div>
          <center style={{color:'blue'}}><h1>BOOKINGS</h1></center>
        <Displaybooking bookinglist={this.state.filtered}/>
        </div>
      </div>
      </div>
    )
    }
  componentDidMount(){
      axios.get(url)
      .then((res)=>{
        this.setState({booking:res.data,filtered:res.data})
      })
      
      
    axios.get(hotelname)
    .then((res)=>{
        this.setState({Hname:res.data})
    })
  }
  
}

export default Viewbooking
