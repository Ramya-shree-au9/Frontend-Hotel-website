import React, { Component } from 'react'
import {Link} from "react-router-dom"
import './header.css'
import {connect} from 'react-redux'
import {userdata} from '../action'

class Header extends Component{
    constructor(props){
        super(props)
        this.state={        
        }
    }
 
   
    Logoutfun=()=>{
        sessionStorage.clear() 
         this.props.dispatch({
            type:'LOGIN',
            payload:''
         })       
    }
 
    renderValue=()=>{
        if(!this.props.logindata){ 
            return( 
                <>
            <li><Link to="/rigister"><span className="glyphicon glyphicon-user"></span>Signup</Link></li>
            <li><Link to='/login'><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
        </>)}
         else if(this.props.logindata && this.props.logindata.data) {return( 
            <>
        <li><Link><span className="glyphicon glyphicon-user"></span>Welcome {this.props.logindata.data.name}</Link></li>      
        <li><Link onClick={this.Logoutfun}><span className="glyphicon glyphicon-log-out"> Logout</span></Link></li>
        </> 
        )}
    }

    render(){
        console.log('header',this.props)
        return(
            <div>
                <nav className=" headersection" >
                <div className="container-fluid">
                    <div className="navbar-header">
                    <Link className="navbar-brand">Developer Funnel</Link>
                    </div>
                    <ul className="nav navbar-nav text-white">
                    <li ><Link to="/" className='text-white'>Home</Link></li>
                    <li><Link to="/viewbooking">Booking List</Link></li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/admin">Admin Dashboard</Link></li>
                    {this.renderValue()}
                    </ul>
                       
                   
                </div>
                </nav>
                </div>
        )
    }
    componentDidMount(){
        console.log('mount')
        this.props.dispatch(userdata())  
    } 
}

function mapStateToProps(state){
    console.log(state.logindata.Ldata)
    return{
      logindata:state.logindata.Ldata
    }   
}

export default connect(mapStateToProps)(Header)

