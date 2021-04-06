import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './signuplogin.css'

const url ='http://localhost:5000/api/auth/login'
class Login extends Component {
    constructor(){
        super()
        this.state={
            email:'',
            password:"",
            error:'',
            error2:''
        }
    }
 
    changeHander1=(e)=>{
        this.setState({email:e.target.value})
    }
    changeHander2=(e)=>{
        this.setState({password:e.target.value})
    }
    handleSubmit=()=>{
        console.log(this.state)
        fetch((url),{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)

        })
        .then((res)=>res.json())
        .then((data)=>{
            sessionStorage.setItem('token',data.token)
            sessionStorage.setItem('_role',data.data.role)
            this.props.history.push('/')
        })
        .catch((err)=>{
            this.setState({error:'Invalid UserName and Password'})
        })    
    }
  render() {
    
    return (
        
      <div>
        
            <React.Fragment>
        <div className="registration-form">

        <form>
        <h2 style={{color:'red'}}>{this.state.error2}</h2>
        
            <div className="form-icon">
                <span><i className="fas fa-user"></i></span>
            </div>
            <div className="form-group">
                <input type="text" className="form-control item" value={this.state.email}  onChange={this.changeHander1} id="email" placeholder="Email"/>
            </div>
           
            <div className="form-group">
                <input type="password" className="form-control item" id="password" value={this.state.password} onChange={this.changeHander2}placeholder="Password"/>
            </div>
           <p className='error'>{this.state.error}</p>
            <div className="form-group">
                <button type="button" className="btn btn-block create-account" onClick={this.handleSubmit}>Sign in</button>
            </div>
            <div className="hr"></div>
            <div className="foot"> <label for="tab-1">You are new user?</label> </div>
                <div className="loginlink"><Link to='/rigister'> <label for="tab-1">Register Here</label></Link> </div>

        </form>
      
    </div>
    
    </React.Fragment>
      </div>
     
    )
  }
  componentDidMount(){

    if(this.props.location.search.split('=')[1]){
        this.setState({error2:this.props.location.search.split('=')[1]})
    }

  }

  
}

export default Login