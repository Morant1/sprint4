import React from 'react'
import { Link } from 'react-router-dom'



// redirect to details 'category:_id'
export function EventiPreview({ eventi, currTag }) {
console.log(eventi._id);
const img = eventi.ImgUrl ? require(`../assets/img/${eventi._id}.jpg`) : require(`../assets/img/default.jpg`)
    return (
        <div className="eventi-preview card">
            <img className="card-img" alt="event-01" src={img}/>
            <button className="attend-btn">40/100 going{eventi.members}</button>
            <div className="card-title">{eventi.title}</div>
            <div className="card-date">{eventi.duration} hours</div>
            <Link to={`/${currTag}/${eventi._id}`}>More Details</Link>
        </div>
    )
}
