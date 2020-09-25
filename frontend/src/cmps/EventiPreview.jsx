import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core';
import { withRouter } from "react-router";

class _EventiPreview extends Component {


    render() {
        const { eventi, currTag, loggedInUser } = this.props;
        const user = eventi.participants.find(participant => participant._id === loggedInUser._id)
        
        const img = require(`../assets/img/${eventi.tags[0]}.jpg`);
        return (
            <div className={`eventi-preview card margin ${this.props.location.pathname==='/'? 'preview':''}`}>
                <Link to={`/${currTag}/${eventi._id}`}>
                    <div className="img-area">
                        <button className="attend-btn">{user ?
                         <span className="joined">You're Going!</span> : <span> Join The fun!</span>}</button>
                        <img className="preview-img" alt="event-01" src={img}></img>
                        <span className="preview-rank"><div className="star fas fa-star"></div><span className="main-rank">{eventi.rank}</span>(40) · {eventi.location.country}</span>
                    </div>
                    <div className="preview-info">
                        {/* {eventi.participants.length} of your friends are going */}
                    <div className="preview-title">{eventi.title.length > 40 ? eventi.title.substr(0,40)+'...': eventi.title}</div>
                    <div className="time-container">
                        <img className="preview-icon"src={require(`../assets/icons/calendar-outline.svg`)}/><span className="preview-time"> {new Date(eventi.startsAt).toLocaleDateString()}</span>
                        <img className="preview-icon"src={require(`../assets/icons/time-outline.svg`)}></img><span className="preview-time"> {new Date(eventi.startsAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                        {/* <br></br> */}
                        <div className="event-creator-section flex align-center">
                            <Avatar className="avatar">{eventi.createdBy.username[0].toUpperCase()}</Avatar>
                            <span className="creator">{eventi.createdBy.username.split(' ')[0].toUpperCase()}</span>
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


export const EventiPreview = connect(mapStateToProps)(withRouter(_EventiPreview))

