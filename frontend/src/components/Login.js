import React from 'react'
import Logindisplay from './logindisplay'
import './signuplogin.css'
import {connect} from 'react-redux'
import {loginData} from '../action'

const Login =(props)=>{

    const submithandle=(email,password)=>{
        props.dispatch(loginData(email,password))
    }

    return (
        
      <div>
        <Logindisplay props={props} loginData={props.logindata} submithandle={submithandle}/>
      </div>
     
    )
  
}


function mapStateToProps(state){
    console.log(state.logindata.Ldata)
    return{
      logindata:state.logindata.Ldata
    }   
}

export default connect(mapStateToProps)(Login)