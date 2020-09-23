import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';




export function EventiPreview({ eventi, currTag }) {
   const img = eventi.ImgUrl ? require(`../assets/img/${eventi.title}.jpg`) : require(`../assets/img/${eventi.title}.jpg`)
    return (
        <div className="eventi-preview card margin">
            <Link to={`/${currTag}/${eventi._id}`}>
                <div className="img-area">
            <button className="attend-btn"><span>going?</span></button>
                <img className="preview-img" alt="event-01" src={img} />
                </div>
                <div className="preview-info">
                    {/* {eventi.participants.length} of your friends are going */}
                    <div className="preview-title">{eventi.title}</div>
                    <span className="preview-time"> {new Date(eventi.startsAt).toDateString()}</span>
                    <br></br>
                   <span className="preview-rank"><StarIcon/>🟊{eventi.rank}(40) · {eventi.location.country}</span>
                    <div className="event-creator-section flex align-center">
                        <Avatar className="avatar">G</Avatar>
                        <span className="creator">{eventi.createdBy.fullName}</span>
                    </div>



                </div>
            </Link>
        </div>
    )
}


