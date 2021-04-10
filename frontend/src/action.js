import axios from 'axios'
const url = '/api/auth'

export function loginData(email,password){ 
    var output = axios.post(`${url}/login`,{email:email,password:password})
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'LOGIN',
                payload:data
            })
        })
    }
}

export function userdata(){ 
    var token = sessionStorage.getItem('token')
    var output = axios.get(`${url}/userInfo`,{headers: { "x-access-token": token }})
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'LOGIN',
                payload:data
            })
        })
    }
}

export function hoteldata(){ 
    console.log('hotel')
    var output = axios.get(`${url}/bookings`)
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'BOOKINGS',
                payload:data
            })
        })
    }
}

export function statusChange(id,status){ 
    console.log('action')
    var output = axios.patch(`${url}/bookingstatus/${id}`,{status:status})
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'BOOKINGSDET',
                payload:data
            })
        })
    }
}