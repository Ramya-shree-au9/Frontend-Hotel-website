import React, { Component } from 'react'
import axios from 'axios'

const url = 'https://developerfunnel.herokuapp.com/hotellist/'

class Costfilter extends Component {
    constructor(){
        super()
        this.state={
            costdata:'',
            tripid:sessionStorage.getItem('tripid')
        }
    }

    filterfun=(inival,finval)=>{
        const filter =this.state.costdata.filter((item)=>{
            return(inival < item.cost && item.cost < finval)
        })
     
        this.props.filtercost(filter) 
    }
    costfilter=(e)=>{
        let cost = e.target.value
        console.log(cost)
        if (cost === ''){
            this.props.filtercost(this.state.costdata)
        }else{
        if(cost === "2000"){
            this.filterfun('2000','3000')
        }
        else if(cost === '3000'){
            this.filterfun('3001','4000')
        }
    
        else if(cost === '4000'){
            this.filterfun('4001','6000')
        }
        else if(cost === '6000'){
            this.filterfun('6001','9000')
        }
        else if(cost === '9000'){
            this.filterfun('9001','90000')
        }
         
        }
   
    }
  render() {
 
    return (
      <div class='costfilterdata'>
        <h4>Cost Filters</h4>
        <div onChange={this.costfilter}>
              <div class="radio">
              <label><input type="radio" name="optradio" value="" />All</label>
                </div>
                <div class="radio">
              <label><input type="radio" name="optradio" value="2000" />Rs. 2000 - 3000 </label>
                </div>
                <div class="radio">
              <label><input type="radio" name="optradio" value="3000"/>Rs. 3001 - 4000</label>
                </div>
                <div class="radio">
              <label><input type="radio" name="optradio" value="4000" />Rs. 4001 - 6000</label>
                </div>
                <div class="radio">
              <label><input type="radio" name="optradio" value="6000" />Rs. 6001 - 9000</label>
                </div>
                <div class="radio">
              <label><input type="radio" name="optradio" value="9000" />Rs. 9001 and Above</label>
                </div>
              
          </div>
      </div>
    )
  }
  componentDidMount(){
      axios.get(`${url}${this.state.tripid}`)
      .then((res)=>{
          this.setState({costdata:res.data})
      })
  }
}

export default Costfilter
