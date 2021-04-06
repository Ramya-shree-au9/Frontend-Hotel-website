import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home/Home'

import Listing from './Listings/ListingApi'
import Details from './Details/Details.js'
import Booking from './Booking/Booking.js'
import ViewBooking from './Booking/Viewbooking'
import Signup from './SignUp'
import Login from './Login'
import AdminApp from './AdminBookingDates/Viewbooking'

const Routing= ()=> {
    return(
        <BrowserRouter>
            <div>
                <Header />

                <Route exact path='/' component={Home}/>
                <Route exact path='/list/:id' component={Listing}/>
                <Route exact path='/details/:id' component={Details}/>
                <Route exact path='/booking/:id' component={Booking}/>
                <Route exact path='/viewbooking' component={ViewBooking}/>
                <Route exact path='/rigister' component={Signup}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/admin' component={AdminApp}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing
