
import React, { Component } from 'react'
import axios from 'axios'

const url = 'https://developerfunnel.herokuapp.com/hotellist/'
 class Listing extends Component {
  filterlogic=(event)=>{
    let roomnumber = event.target.value
    let tripid = sessionStorage.getItem('tripid')
    let roomurl;
    if(roomnumber === ""){
        roomurl=`${url}${tripid}`
      }
    else{
        roomurl=`${url}${tripid}?roomtype=${roomnumber}`
      }
      axios.get(roomurl)
      .then((Response)=>{this.props.filterdata(Response.data)})
  }
  render() {
    
    return (
      <div class='roomfilterdata'>
        <h4>Room Filters</h4>
        <div onChange={this.filterlogic}>
              <div class="radio">
              <label><input type="radio" name="optradio" value="" />All</label>
                </div>
                <div class="radio">
              <label><input type="radio" name="optradio" value="1" />Deluxe Room</label>
                </div>
                <div class="radio">
              <label><input type="radio" name="optradio" value="2"/>Premiere Rooms</label>
                </div>
                <div class="radio">
              <label><input type="radio" name="optradio" value="3" />Budget Room</label>
                </div>
                <div class="radio">
              <label><input type="radio" name="optradio" value="4"/>Semi Deluxe Room</label>
                </div>
          </div>
      </div>
    )
  }
}

export default Listing
