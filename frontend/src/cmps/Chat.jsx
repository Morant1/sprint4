import React, { Component } from 'react';
import socketService from '../services/socketService';
import { Avatar, Button, TextField } from '@material-ui/core';

export class Chat extends Component {
  state = {
    typeMsg: '',
    msg: { from: 'moran', txt: '' },
    msgs: [],
    topic: this.props.eventi._id
  };

  componentDidMount() {
    socketService.setup();
    socketService.emit('chat topic', this.state.topic);
    socketService.on('chat addMsg', this.addMsg);
    socketService.on('chat history', msgs => {
      this.setState({ msgs: msgs[this.state.topic] || [] });

    })
  }

  componentWillUnmount() {
    socketService.off('chat addMsg', this.addMsg);
    socketService.terminate();
  }

  addMsg = newMsg => {
    this.setState(prevState => ({ msgs: [...prevState.msgs, newMsg] }));
  };


  sendMsg = ev => {
    ev.preventDefault();
    socketService.emit('chat newMsg', this.state.msg);
    this.setState({ msg: { ...this.state.msg, txt: '' }, typeMsg: '' });
  };


  msgHandleFocus = ev => {
    const typingMsg = `${this.state.msg.from} is typing...`;
    socketService.emit('typing Msg', typingMsg);
    this.setState({ typeMsg: typingMsg })
  }

  msgHandleBlur = ev => {
    const typingMsg = '';
    socketService.emit('typing Msg', typingMsg);
    this.setState({ typeMsg: typingMsg })
  }

  msgHandleChange = ev => {
    const { name, value } = ev.target;

    this.setState(prevState => {
      return {
        msg: {
          ...prevState.msg,
          [name]: value
        }
      };
    });
  };
  render() {
    const { eventi } = this.props;
    return (
      <div className="chat flex justify-center align-center">
        <h3 style={{color:'white'}}>Comment and Reviews</h3>
        <div className="chat">
          <form onSubmit={this.sendMsg}>
            <TextField
              style={{color:'white'}}
              type="text"
              value={this.state.msg.txt}
              onChange={this.msgHandleChange}
              onFocus={this.msgHandleFocus}
              onBlur={this.msgHandleBlur}
              name="txt"
              autoComplete='off'
            />
            <Button>Send</Button>
            <div style={{ minHeight: '25px',color:'white' }}>{this.state.typeMsg ? this.state.typeMsg : ''}</div>
          </form>
        </div>
        {eventi.comments.map((comment, index) => {
          return (
            <div key={comment.id} className={`chat-container ${index % 2 === 0 ? 'blue' : ''}`}>
              {/* {comment.author.imgUrl? 
                        <img src={`${comment.author.imgUrl}`} alt="Avatar" style={{width:'100%'}}/>
                        : */}
              <Avatar>{comment.author.fullName.split(' ')[0][0]}</Avatar>
              <p>{comment.txt}</p>
              <span className={`time-${index % 2 === 0 ? 'left' : 'right'}`}>
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          )
        })}

      </div>
    )
  }
}

