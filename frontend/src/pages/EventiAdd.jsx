import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEventi} from '../store/actions/eventActions'

export class _EventiAdd extends Component {
    state = {
        eventi: {
            title: '',
            description: '',
            duration: '',
            city: '',
            country: '',
            capacity: '',
            tags: '',
            images: '',
            startsAt: ''
            
        }
    }
    componentDidMount = async () => {
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
        return (
            
            <div className="edit-area margin">
                <form onSubmit={(event) => this.onSubmit(event)} className="edit-form container">
                    <h1> Add Event</h1>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" onChange={this.handleChange} value={eventi.title} placeholder="Title" /><br></br>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" id="description" onChange={this.handleChange} value={eventi.description} placeholder="Description" /><br></br>
                    <label htmlFor="date">Date:</label>
                    <input type="datetime-local" name="startsAt" id="date" onChange={this.handleChange} value={eventi.startsAt}/><br></br>
                     <label htmlFor="City">City:</label>
                    <input type="text" name="city" id="city" onChange={this.handleChange} value={eventi.city} placeholder="city" /><br></br> 
                    <label htmlFor="Country">Country:</label>
                    <input type="text" name="country" id="country" onChange={this.handleChange} value={eventi.location} placeholder="country" /><br></br> 
                    <label htmlFor="duration">Duration:</label>
                    <input type="number" name="duration" id="duration" step="0.5" min="0" max="100" onChange={this.handleChange} value={eventi.duration} placeholder="Duration(in hours)" /><br></br>
                    <label htmlFor="capacity">Capacity:</label>
                    <input type="number" name="capacity" id="capacity" step="1" min="0" max="100000" onChange={this.handleChange} value={eventi.capacity} placeholder="Capacity" /><br></br>
                    <label htmlFor="tags">Tags:</label>
                    <input type="text" name="tags" id="tags" onChange={this.handleChange} value={eventi.tags} placeholder="(seperated by comma)"/><br></br> 
                    <label htmlFor="images">Images:</label>
                    <input type="file" name="images" id="files" onChange={this.handleChange} value={eventi.images}/><br></br> 
                    <button className="save-btn" onClick={()=>{console.log('added event')}}>Save</button>
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
export const EventiAdd = connect(mapStateToProps, mapDispatchToProps)(_EventiAdd)
