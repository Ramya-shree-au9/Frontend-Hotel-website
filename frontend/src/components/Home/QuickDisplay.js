import React from 'react'
import { Link } from 'react-router-dom'
import './QuickSearch.css'

const Quickdisplay =(props)=>{
   
    const serchtrip=({searchData})=>{
        if(searchData){
        return searchData.map((data)=>{
            return(
                <Link to={`/list/${data.trip}`}>
                        <div className="tileContainer" key={data.trip} >
                            <div className="tileComponent1">
                                <img src={data.image} alt=""/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {data.name}
                                </div>
                                <div className="componentSubHeading">
                                    Start your {data.name} trip with us.
                                </div>
                            </div>
                        </div>
                    </Link>
            )
        })}
    }
    return(
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeading">
                    QuickSearch
                </p>
                <p className="quickSearchSubHeading">
                    Discover Trip By Type
                </p>
                <br/>
                {serchtrip(props)}
            </div>
        </div>
    )
}

export default Quickdisplay