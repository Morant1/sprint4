import React, { Component } from 'react'
import {BusService} from '../services/event-bus-service';
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';

export class _UserNotifications extends Component {
    state = {
        msgs: []
    }
    unsubscribe;
    componentDidMount() {
        this.unsubscribe = BusService.on('notify', (data) => {
            this.setState({ msgs: [...this.state.msgs, data.msg]})
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        const { msgs } = this.state
        console.log(msgs)
        if (!msgs) return 'Loading';
        return (
            <React.Fragment>
                <div className="userName">{this.props.loggedInUser.username} activities</div>
                <ul>{ msgs.map((msg,index)=>{
                    return (
                    <li key={index}className="list-item flex"><Avatar>{this.props.loggedInUser.username[0].toUpperCase()}</Avatar>{msg} 
                    <div className="date">{new Date(Date.now()).toLocaleDateString("en-US")}</div></li>
                    )
                })}</ul>
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.userReducer.loggedInUser
    };
};


export const UserNotifications = connect(mapStateToProps)(_UserNotifications)

