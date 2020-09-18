import React from 'react'
import { Link } from 'react-router-dom'



{/* Lital dont forget to put date -> <h3>CreatedAt:{new Date(toy.createdAt).toDateString()}</h3> */}
export function EventiPreview({ eventi, currTag }) {
    console.log(eventi._id);
    const img = eventi.ImgUrl ? require(`../assets/img/${eventi._id}.jpg`) : require(`../assets/img/default.jpg`)
    return (
        <div className="eventi-preview card">
            <img className="preview-img" alt="event-01" src={img} />
            <div className="preview-info">
                <button className="attend-btn">40/100 going{eventi.members}</button>
                <div className="preview-title">{eventi.title}</div>
                <div className="preview-date">{eventi.duration}hours</div>
                <Link to={`/${currTag}/${eventi._id}`}>More Details</Link>
            </div>
        </div>
    )
}
