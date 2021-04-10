import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './signuplogin.css'

const url = '/api/auth/register'
class SignUp extends Component {
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            password:'',
            error:''
        }
    }

    changeHanderName=(e)=>{
        this.setState({name:e.target.value})
    }
    changeHanderEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    changeHanderPassword=(e)=>{
        this.setState({password:e.target.value})
    }

    handleSubmit=()=>{
        if(this.state.name.length > 0 && this.state.email.length > 10 && this.state.password.length > 0){
            fetch((url),{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
        })
        this.props.history.push('/login')
        localStorage.setItem('username',this.state.name)
        }
        else{
            this.setState({error:"Please enter valid credential"})
        }
      
    }
  render() {
    return (
      <div>
         
         {/* <div className="container">
       
       <div className="panel panel-primary">
          <div className="panel-heading">
          <h2>Rigistration Form</h2>
          </div>
          <div className="panel-body">
              <div className="form-group">
                  <label className="control-label">Name:</label>
                  <input type="text"  value={this.state.name} className="form-control"
                  onChange={this.changeHanderName}/>
                  

              </div>
              <div className="form-group">
              <label for="phone">Email:</label>
              <input type="email" className="form-control" value={this.state.email} id="phone" onChange={this.changeHanderEmail}/>
              </div>
              <label for="phone">Password:</label>
              <input type="password" className="form-control" id="phone" value={this.state.password} onChange={this.changeHanderPassword}/>
              </div>
              <div>
              <span style={{color:'red'}}>{this.state.error}</span>
              </div>
             
   
              <Link className="btn btn-success" onClick={this.handleSubmit}>Register</Link>
             
          </div>
          </div> */}
          <React.Fragment>
        <div className="registration-form">
        <form>
            <div className="form-icon">
                <span><i className="fas fa-user"></i></span>
            </div>
            <div className="form-group">
                <input type="text" className="form-control item" value={this.state.name} onChange={this.changeHanderName} id="username" placeholder="Username"/>
            </div>
          
            <div className="form-group">
                <input type="text" className="form-control item" value={this.state.email}  onChange={this.changeHanderEmail} id="email" placeholder="Email"/>
            </div>
            <span className='error'>{this.state.errorMessage}</span>
            <div className="form-group">
                <input type="password" className="form-control item" value={this.state.password} onChange={this.changeHanderPassword} id="password" placeholder="Password"/>
            </div>
            <div>
              <span style={{color:'red'}}>{this.state.error}</span>
              </div>
            <div className="form-group">
                <button type="button" className="btn btn-block create-account" onClick={this.handleSubmit}>Sign up</button>
            </div>
            <div className="hr"></div>
                <div className="foot"> <label for="tab-1">Already Member?</label> </div>
                <div className="loginlink"><Link to='/login'> <label for="tab-1">Login</label></Link> </div>
        </form>
      
    </div>
    
    </React.Fragment>
      </div>
    )
  }
}

export default SignUp
