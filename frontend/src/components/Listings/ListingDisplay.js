import React from 'react'
import './ListingApi.css'
import {Link} from 'react-router-dom'


const listingDisplay=(props)=>{
    console.log(props.listdata)
    const Hoteldetails = ({listdata})=>{
        if(listdata.length>0){
            return listdata.map((item)=>{
                return(
                    
                    <div className='detailsofhotel row'>
                        <Link style={{textDecoration:'none'}} to={`/details/${item._id}`}>
                        <>
                        <div className='col-md-6 imgdiv'>
                            <img src={item.thumb} alt=''/>
                        </div>
                        <div id='hotel-details' className='col-md-6'>
                         <h2 >{item.name}</h2> 
                            <p><span class='sidehead'>Adress:</span>{item.address}</p>
                            <p><span class='sidehead'>Locality:</span>{item.locality}</p>
                            <p><span class='sidehead'>Room-type:</span>{item.type[0].name},{item.type[1].name},{item.type[2].name}</p>
                            <p><span class='sidehead'>Cost for night:</span>Rs. {item.cost}</p>
                        </div>
                        </>
                        </Link>
                    </div>
                   
                )
            })
        }
        else{
            return(<div id="notavail"><h2>No data found</h2></div>)
        }

    }
    return (
      <div>
        {Hoteldetails(props)}
      </div>
    )
  
}

export default listingDisplay
