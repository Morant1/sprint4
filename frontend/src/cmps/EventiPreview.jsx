import React from 'react'
import { Link } from 'react-router-dom'



// redirect to details 'category:_id'
export function EventiPreview({ eventi }) {

    return (
        <div className="eventi-preview card">
            <button className="attend-btn">40/100 going{eventi.members}</button>
            <img className="card-img" src={eventi.imgUrls}/>
            <div className="card-title">{eventi.title}</div>
            <div className="card-date">{eventi.startsAt}</div>
            <Link to={`/event/${eventi._id}`}></Link>
        </div>
    )
}
