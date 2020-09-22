import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core';



{/* Lital dont forget to put date -> <h3>CreatedAt:{new Date(toy.createdAt).toDateString()}</h3> */ }
export function EventiPreview({ eventi, currTag }) {
    const img = eventi.ImgUrl ? require(`../assets/img/${eventi.title}.jpg`) : require(`../assets/img/${eventi.title}.jpg`)
    return (
        <div className="eventi-preview card">
            <Link to={`/${currTag}/${eventi._id}`}>
                <img className="preview-img" alt="event-01" src={img} />
                <div className="preview-info">
                    <button className="attend-btn" >{eventi.participants.length}/{eventi.capacity}
                    </button>
                    <div className="preview-title">{eventi.title}</div>
                    <span className="preview-time"> {new Date(eventi.startsAt).toDateString()}</span>
                    <div className="preview-date">{eventi.duration} hours</div>
                    <div className="event-creator-section flex align-center">
                        <Avatar className="avatar">G</Avatar>
                        <span className="creator">{eventi.createdBy.fullName}</span>
                    </div>



                </div>
            </Link>
        </div>
    )
}


