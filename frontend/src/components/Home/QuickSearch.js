import React, { Component } from 'react'
import QuickDisplay from './QuickDisplay'

const serchItem = 'https://developerfunnel.herokuapp.com/booking'

class QuickSearch extends Component {
  constructor(){
    super()
    this.state={
      QuickSearch:''
    }
  }
  render() {
    return (
      <div> 
        <QuickDisplay searchData={this.state.QuickSearch}/>  
      </div>
    )
  }
  componentDidMount(){
    fetch(serchItem,{method:'GET'})
    .then((res)=> res.json())
    .then((data)=>{
      this.setState({QuickSearch:data
      })
    })
  }
}

export default QuickSearch
