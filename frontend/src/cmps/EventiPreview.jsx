import React from 'react'
import { Link } from 'react-router-dom'



{/* Lital dont forget to put date -> <h3>CreatedAt:{new Date(toy.createdAt).toDateString()}</h3> */}
export function EventiPreview({ eventi, currTag }) {
    const img = eventi.ImgUrl ? require(`../assets/img/${eventi.title}.jpg`) : require(`../assets/img/${eventi.title}.jpg`)
    return (
        <div className="eventi-preview card">
            <Link to={`/${currTag}/${eventi._id}`}>
            <img className="preview-img" alt="event-01" src={img} />
            <div className="preview-info">
                <button className="attend-btn">40/100 going
                </button>
                <h3>Created At: 11/10/2020</h3>
                {/* {new Date(`${eventi.createdAt}`).toDateString()} */}
                <div className="preview-title">{eventi.title}</div>
                <div className="preview-date">{eventi.duration}1.5 hours</div>
            
               
            </div>
            </Link>
        </div>
    )
}
