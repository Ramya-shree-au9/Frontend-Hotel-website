import React, {useEffect, useState }  from 'react'
import {Link} from 'react-router-dom'

export const Logindisplay = (props) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const [error2,setError2]=useState('')

    
    console.log(props.loginData)
    useEffect(()=>{
        console.log(props.loginData)
        if(props.loginData){
            if(props.loginData.message){
                setError(props.loginData.message)
            }
        else if(props.loginData.auth === true){
            props.props.history.push('/')
            sessionStorage.setItem('token',props.loginData.token)
            sessionStorage.setItem('__role',props.loginData.data.role)
        }}
    },[props.loginData])
 
    const changeHander1=(e)=>{
        setEmail(e.target.value)
    }
    const changeHander2=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit=()=>{
        if(email && password){
            props.submithandle(email,password)
        }
        else{
            setError('Enter both field')
        }  
    }
    
    return (
        <div>
            
            <React.Fragment>
        <div className="registration-form">

        <form>
        <h2 style={{color:'red'}}>{error2}</h2>
        
            <div className="form-icon">
                <span><i className="fas fa-user"></i></span>
            </div>
            <div className="form-group">
                <input type="text" className="form-control item" value={email}  onChange={changeHander1} id="email" placeholder="Email"/>
            </div>
           
            <div className="form-group">
                <input type="password" className="form-control item" id="password" value={password} onChange={changeHander2}placeholder="Password"/>
            </div>
           <p className='error'>{error}</p>
            <div className="form-group">
                <button type="button" className="btn btn-block create-account" onClick={handleSubmit}>Sign in</button>
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

export default Logindisplay
