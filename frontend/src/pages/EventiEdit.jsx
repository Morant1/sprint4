import React, { Component } from 'react'
import { connect } from 'react-redux'
import { eventService } from '../services/eventService'
import { addEventi } from '../store/actions/eventActions'

 class _EventiEdit extends Component {
    state = {
        eventi: {
            title: '',
            description: '',
            duration: '',
            location: '',
            capacity: '',
            tags: '',
            imgs: '',
            startsAt: ''

        }
    }
    componentDidMount = async () => {
        const eventiId = this.props.match.params._id
        if (eventiId) {
            const eventi = await eventService.getById(eventiId)
            console.log("Event loaded",eventi);
            this.setState({eventi})
        }
        console.log('mounted');
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = (target.type === ' number  ') ? parseInt(target.value) : target.value
        console.log(target.value);
        this.setState(prevState => {
            return {
                eventi: {
                    ...prevState.eventi,
                    [field]: value
                }
            }
        })

    }
    onSubmit = async (ev) => {
        ev.preventDefault()
        console.log(this.state);
        await this.props.addEventi(this.state.eventi);
    }

    render() {
        const { eventi } = this.state
        if (!eventi.title) return "Loading..."
        return (

            <div className="edit-area margin">
                <form onSubmit={(event) => this.onSubmit(event)} className="edit-form container">
                    <h1> Edit Event</h1>
                    <label htmlFor="name">Title:</label>
                    <input type="text" name="name" id="name" onChange={this.handleChange} value={eventi.title} placeholder="title" /><br></br>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" id="description" onChange={this.handleChange} value={eventi.description} placeholder="Description" /><br></br>
                    <label htmlFor="date">Date:</label>
                    <input type="datetime-local" name="startsAt" id="date" onChange={this.handleChange} value={eventi.startsAt} /><br></br>
                    <label htmlFor="location">Location:</label>
                    <input type="text" name="location" id="location" onChange={this.handleChange} value={eventi.location} placeholder="(city,country)" /><br></br> 
                    <label htmlFor="duration">Duration:</label>
                    <input type="number" name="duration" id="duration" step="0.5" min="0" max="100" onChange={this.handleChange} value={eventi.duration} placeholder="Duration(in hours)" /><br></br>
                    <label htmlFor="capacity">Capacity:</label>
                    <input type="number" name="capacity" id="capacity" onChange={this.handleChange} value={eventi.capacity} placeholder="Capacity" /><br></br>
                    <label htmlFor="tags">Tags:</label>
                    <input type="text" name="tags" id="tags" onChange={this.handleChange} value={eventi.tags} placeholder="(seperated by comma)"/><br></br> 
                    <button className="save-btn" onClick={() => { console.log('added event') }}>Save</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        events: state.eventReducer.events
    }
}

const mapDispatchToProps = {
    addEventi
}
export const EventiEdit= connect(mapStateToProps, mapDispatchToProps)(_EventiEdit)
