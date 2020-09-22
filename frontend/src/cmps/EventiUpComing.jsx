import React from 'react'
import { Link } from 'react-router-dom'



{/* Lital dont forget to put date -> <h3>CreatedAt:{new Date(toy.createdAt).toDateString()}</h3> */}
export function EventiUpComing({ eventi, currTag }) {
    return (
            <React.Fragment>
                <Link to={`/${currTag}/${eventi._id}`}>
                    <li>{eventi.title}, {new Date(eventi.startsAt).toDateString()}</li>
                </Link>
            </React.Fragment>


    )
}
