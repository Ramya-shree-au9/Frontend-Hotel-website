import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const url = 'http://localhost:5000/api/auth/bookingstatus'
class Displaybooking extends Component{
    constructor(props){
        super(props)
        this.state={
            error:''
        }
    }

    AcceptDetail=(e)=>{
        e.target.innerText = 'Accepted'
        console.log(e.target.value)
        fetch(`${url}/${e.target.value}`,{
            method:'PATCH',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'    
                },
            body:JSON.stringify({
                status:'ACCEPTED'
            })
        })
        .then(response => response.json())
        .then(json => console.log(json))
    }

    rejectItem=(e)=>{
        e.target.innerText = 'Rejected'
        fetch(`${url}/${e.target.value}`,{
            method:'PATCH',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'    
                },
            body:JSON.stringify({
                status:'REJECTED'
            })
        })
        .then(response => response.json())
        .then(json => console.log(json))
    }
   
    bookingDisplay=()=>{
        if(this.props.bookinglist)
       {if(this.props.bookinglist.length > 0){
        return this.props.bookinglist.map((item)=>{
            return(
               
                    <tbody>
                        <tr>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.hotelName}</td>
                            <td>{item.date}</td>
                            <td><button className='btn btn-success' value={item._id} onClick={this.AcceptDetail}>Accept</button>&nbsp;
                            <button value={item._id} onClick={this.rejectItem} className='btn btn-danger'>Reject</button></td>
                        </tr>
                    </tbody>
              
            )
        })
       } 
       else{
        return(
            <h3 style={{color:'red'}}>"Hotel is not booked"</h3>
        )
     }
    }}

    LatestDisplay=()=>{
        if(this.props.bookinglist)
        {
            if(this.props.bookinglist.length > 0){
         return this.props.bookinglist.map((item)=>{
            if(item.date > '2020-12-27'){
               
                return(
                    <tbody>
                        <tr>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.hotelName}</td>
                            <td>{item.date}</td>
                            <td><button className='btn btn-success' value={item._id} onClick={this.AcceptDetail}>Accept</button>
                            &nbsp;<button value={item._id} onClick={this.rejectItem} className='btn btn-danger'>Reject</button></td>
                        </tr>
                    </tbody>
            )
             }
             else{
                 return(
                    <h3 style={{color:'red'}}>{this.state.error}</h3> )} 
         })
        } 
        else{
         return(
             <h3 style={{color:'red'}}>"Hotel is not booked"</h3>
         )
      }
     }
    }
    
    pastestDisplay=()=>{
        if(this.props.bookinglist)
        {
            if(this.props.bookinglist.length > 0){
         return this.props.bookinglist.map((item)=>{
            if(item.date < '2021-04-06'){
               
                return(
                    <tbody>
                        <tr>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.hotelName}</td>
                            <td>{item.date}</td>                            
                            <td><button className='btn btn-success' value={item._id} onClick={this.AcceptDetail}>Accept</button>
                            &nbsp;<button value={item._id} onClick={this.rejectItem} className='btn btn-danger'>Reject</button></td>
                        </tr>
                    </tbody>
            )}
             else{
                 return(
                    <h3 style={{color:'red'}}>{this.state.error}</h3> ) }
         })
        } 
        else{
         return(
             <h3 style={{color:'red'}}>"Hotel is not booked"</h3> )}
     }
    }
   
    Logoutfun=()=>{
        sessionStorage.clear()
        
    }
    render(){
        return (
            <div>
                 <div className="container">
                    {/* <h3>{this.state.error}</h3> */}
                 <Tabs>
              <TabList style={{color:'#f64f59'}}>
                <Tab><h4>All Bookings</h4></Tab>
                <Tab><h4>Latestbookings</h4></Tab>
                <Tab><h4>Pastbookings</h4></Tab>
                
              </TabList>

              <TabPanel>
              <table className="table table-responsive">
                          <thead  style={{color:'#FFE000',backgroundColor:'red'}}>
                              <tr>
                                  <th>Id</th>
                                  <th>Name</th>
                                  <th>Phone Number</th>
                                  <th>Hotel Name</th>
                                  <th>Booking Date</th>
                                  {/* <th>Status</th> */}
                                  <th>Checking</th>
                                  
                      
                              </tr>
                          </thead>
                          {this.bookingDisplay()}
                  </table>
              </TabPanel>
              <TabPanel>
              <table className="table table-responsive">
                          <thead style={{color:'#FFE000',backgroundColor:'red'}}>
                              <tr>
                                  <th>Id</th>
                                  <th>Name</th>
                                  <th>Phone Number</th>
                                  <th>Hotel Name</th>
                                  <th>Booking Date</th>
                                  <th>Checking</th>

                              </tr>
                          </thead>
                          {this.LatestDisplay()}
                  </table>
              </TabPanel>
              <TabPanel>
              <table className="table table-responsive">
                          <thead style={{color:'#FFE000',backgroundColor:'red'}}>
                              <tr>
                                  <th>Id</th>
                                  <th>Name</th>
                                  <th>Phone Number</th>
                                  <th>Hotel Name</th>
                                  <th>Booking Date</th>
                                  <th>Checking</th>
                              </tr>
                          </thead>

                    
                          {this.pastestDisplay()}
                  </table>
              </TabPanel>
            </Tabs>  
                 
                  
                  <Link className='btn btn-danger' onClick={this.Logoutfun}>Log out</Link>
                  </div>
                  
            </div>
          )
    }
    
  }


export default Displaybooking
