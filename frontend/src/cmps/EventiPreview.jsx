import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core';

class _EventiPreview extends Component {


    render() {
        const { eventi, currTag, loggedInUser } = this.props;
        const user = eventi.participants.find(participant => participant._id === loggedInUser._id)
        
        const img = require(`../assets/img/${eventi.tags[0]}.jpg`);
        return (
            <div className="eventi-preview card margin">
                <Link to={`/${currTag}/${eventi._id}`}>
                    <div className="img-area">
                        <button className="attend-btn">{user ? <span>You are going!</span> : <span> Join The fun!</span>}</button>
                        <img className="preview-img" alt="event-01" src={img} />
                    </div>
                    <div className="preview-info">
                        {eventi.participants.length} of your friends are going
                    <div className="preview-title">{eventi.title}</div>
                        <span className="preview-time"> {new Date(eventi.startsAt).toDateString()}</span>
                        <span className="preview-time"> {new Date(eventi.startsAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        <br></br>
                        <span className="preview-rank"><div className="star fas fa-star"></div> {eventi.rank}(40) · {eventi.location.country}</span>
                        <div className="event-creator-section flex align-center">
                            <Avatar className="avatar">G</Avatar>
                            <span className="creator">{eventi.createdBy.fullName}</span>
                        </div>



                    </div>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.userReducer.loggedInUser
    };
};


export const EventiPreview = connect(mapStateToProps)(_EventiPreview)


