import React, { Component } from 'react'
import axios from 'axios'
import Displaybooking from './DisplayAdmin'

const url = 'http://localhost:5000/api/auth/bookings'
const userinfo='http://localhost:5000/api/auth/userinfo'
const hotelname ='https://developerfunnel.herokuapp.com/hotels?city='
class Viewbooking extends Component {
    constructor(){
        super()
        this.state={
            booking:'',
            Hname:'',
            seleHotel:'',
            filtered:'',
            date:'',
            bgcolor:''
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

      this.setState({seleHotel:e.target.value})
      
      const output = this.state.booking.filter((data)=>{
        return ((data.hotelName) === 
        (e.target.value))
        })
        this.setState({filtered:output})
            
        }
   
    selectedDate=(e)=>{
      this.setState({date:e.target.value})

      const output = this.state.booking.filter((data)=>{
        return ((data.date) === 
        (e.target.value))
        })
        this.setState({filtered:output})
    }

    sort=()=>{
      if(this.state.booking){
        this.state.booking.sort((a, b) => new Date(a.date)- new Date(b.date)) 
    }
  }

  render() {
    if (!sessionStorage.getItem('token')){
      this.props.history.push('/login')
    }
    if (sessionStorage.getItem('token') && sessionStorage.getItem("_role") !== 'Admin'){
      this.props.history.push('/login?message=You Are Not Admin')
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
        {this.sort()}
      </div>
      </div>
    )
    }
  componentDidMount(){
      axios.get(url)
      .then((res)=>{
        this.setState({booking:res.data,filtered:res.data})
      })
      
      fetch((userinfo),{
        method:'GET',
        headers:{
          'x-access-token':sessionStorage.getItem('token')
        }
      })
      .then((res)=>res.json())
      .then((data)=>{
        sessionStorage.setItem('_role',data.role)
        localStorage.setItem('username',data.name)
      })

        axios.get(hotelname)
        .then((res)=>{
        this.setState({Hname:res.data})
    })
    
  }
  
}

export default Viewbooking
