import React from 'react';


const Footer = (props)=> {
  console.log(props)
    return (
    <h3 style={{textAlign:"center"}}>&copy; Developer Funnel {props.year} {props.month}</h3>
    )
  }

export default Footer