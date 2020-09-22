import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';



{/* Lital dont forget to put date -> <h3>CreatedAt:{new Date(toy.createdAt).toDateString()}</h3> */ }
export function EventiPreview({ eventi, currTag }) {
   const img = eventi.ImgUrl ? require(`../assets/img/${eventi.title}.jpg`) : require(`../assets/img/${eventi.title}.jpg`)
    return (
        <div className="eventi-preview card margin">
            <Link to={`/${currTag}/${eventi._id}`}>
                <div className="img-area">
            <button className="attend-btn" ><span>who's going?</span></button>
                <img className="preview-img" alt="event-01" src={img} />
                </div>
                <div className="preview-info">
                    {eventi.participants.length} of your friends are going
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


