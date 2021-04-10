import React, {useEffect,useState } from 'react'
import axios from 'axios'
import Displaybooking from './DisplayAdmin'
import '../Booking/booking.css'
import {hoteldata,statusChange} from '../../action'
import {connect} from 'react-redux'

const hotelname ='https://developerfunnel.herokuapp.com/hotels?city='


const Viewbooking = (props)=> {
  const [booking,setBooking] = useState('')
  const [Hname,setHname] = useState('')
  const [seleHotel,setSeleHotel] = useState('')
  const [filtered,setFiltered] = useState('')
  const [date,setDate] = useState('')

  useEffect(()=>{
    props.dispatch(hoteldata())
    axios.get(hotelname)
          .then((res)=>{
            setHname(res.data)
      })
  },[])

  useEffect(()=>{
    if(props.hoteldata){
      setBooking(props.hoteldata)
      setFiltered(props.hoteldata)
    }
    
  },[props.hoteldata])

  const renderHotelname=(data)=>{
      if(data){
        return data.map((item)=>{
          return(
            <option value={item.name}>{item.name}</option>
          )
        })
      }
    }

   const HotelName=(e)=>{
    setSeleHotel(e.target.value) 
      const output = booking.filter((data)=>{
        return ((data.hotelName) === 
        (e.target.value))
        })
        setFiltered(output)      
        }
   
   const selectedDate=(e)=>{
      setDate(e.target.value)
      const output = booking.filter((data)=>{
        return ((data.date) === (e.target.value))
        })
        setFiltered(output)
    }

    console.log(props.hoteldata)
   const sort=()=>{
      if(booking){
        booking.sort((a, b) => new Date(a.date)- new Date(b.date)) 
    }
    }

   const statusUpdate=async(id,status)=>{
     await props.dispatch(statusChange(id,status))
     await props.dispatch(hoteldata())
  }

    if (!sessionStorage.getItem('token')){
      props.history.push('/login')
    }
    if (sessionStorage.getItem('token') && sessionStorage.getItem("__role") !== 'Admin'){
      props.history.push('/login?message=You Are Not Admin')
    }
    return (
      <div style={{marginTop:'10px'}}>
      
      <div className='container'>
      <p className='filterdata'>Filter By:</p>
        <div className='filterdata'>
        <select onClick={HotelName} style={{padding:'5px'}}>
          
          <option>------SELECT HOTEL------</option>
          {renderHotelname(Hname)}

        </select> &nbsp;
        <input  style={{padding:'3px'}} type='date' onChange={selectedDate} value={date}></input>
        </div>
        <div>
          <center style={{color:'blue'}}><h1>BOOKINGS</h1></center>
        <Displaybooking bookinglist={filtered} statusUpdate={statusUpdate}/>
        </div>
        {sort}
      </div>
      </div>
    )
    
  // componentDidMount(){
      

  //       axios.get(hotelname)
  //       .then((res)=>{
  //       Hname:res.data})
  //   })
    
  // }
  
}

function mapStateToProps(state){
  return{
    hoteldata:state.logindata.Hdata
  }
}

export default connect(mapStateToProps)(Viewbooking)
