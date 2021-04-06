import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Displaybooking extends Component{
    constructor(props){
        super(props)
        this.state={
            error:''
        }
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
                            <td style={{color:"#6dd5ed"}}>{item.status}</td>
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
    }
        
    }
    
   
    Logoutfun=()=>{
        sessionStorage.clear()
        
    }
    render(){
        // console.log('fil',this.state.filtered)
        return (
            <div>
                 <div className="container">
                  <table className="table table-responsive">
                          <thead style={{color:'#FFE000',backgroundColor:'red'}}>
                              <tr>
                                  <th>Id</th>
                                  <th>Name</th>
                                  <th>Phone Number</th>
                                  <th>Hotel Name</th>
                                  <th>Booking Date</th>
                                  <th>Status</th>
                      
                              </tr>
                          </thead>

                          {/* {this.filterhotel(this.props.bookinglistbyname)} */}
                          {this.bookingDisplay()}
                  </table>
                  <Link className='btn btn-danger' onClick={this.Logoutfun}>Log out</Link>
                  </div>
                  
            </div>
          )
    }
    
  }


export default Displaybooking
