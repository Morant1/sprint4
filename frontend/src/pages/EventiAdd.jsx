import React, { Component } from 'react'
import { connect } from 'react-redux'
import { eventService } from '../services/eventService'
import Button from '@material-ui/core/Button';
import { addEvent} from '../store/actions/eventActions'

export class _EventiAdd extends Component {
    state = {
        eventi: {
            title: '',
            description: '',
            duration: '',
            country: '',
            capacity: '',
            tags: '',
            imgs: '',
            startsAt:''
            
        }
    }
    componentDidMount = async () => {
        const eventiId = this.props.match.params.eventiId
        if (eventiId) {
            const eventi = await eventService.getById(eventiId)
            console.log(eventi);
            this.setState({ ...eventi })
        }
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
        await this.props.addEvent(this.state.eventi);
    }

    render() {
        const { eventi } = this.state
        return (
            
            <div className="edit-area">
                <form onSubmit={(event) => this.onSubmit(event)} className="edit-form container">
                    <h1> Add Event</h1>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" onChange={this.handleChange} value={eventi.title} placeholder="Title" />
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" id="description" onChange={this.handleChange} value={eventi.description} placeholder="Description" />
                    <label htmlFor="date">Tags:</label>
                    <input type="datetime-local" name="date" id="date" onChange={this.handleChange} value={eventi.startsAt}/>
                    <label htmlFor="country">Country:</label>
                    <input type="text" name="country" id="country" onChange={this.handleChange} value={eventi.country} placeholder="Country" />
                    <label htmlFor="duration">Duration:</label>
                    <input type="text" name="duration" id="duration" onChange={this.handleChange} value={eventi.duration} placeholder="Duration" />
                    <label htmlFor="capacity">Capacity:</label>
                    <input type="number" name="capacity" id="capacity" onChange={this.handleChange} value={eventi.capacity} placeholder="Capacity" />
                    <label htmlFor="tags">Tags:</label>
                    <input type="text" name="tags" id="tags" onChange={this.handleChange} value={eventi.tags} placeholder="(seperated by comma)"/>

                    <button>Save</button>
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
    addEvent
}
export const EventiAdd = connect(mapStateToProps, mapDispatchToProps)(_EventiAdd)
