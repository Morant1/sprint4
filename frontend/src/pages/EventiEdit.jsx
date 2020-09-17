import React, { Component } from 'react'
import { connect } from 'react-redux'
import { eventService } from '../services/eventService'

// import { toyService } from '../services/toyService';
import { updateEvent } from '../store/actions/eventActions'

export class _EventiEdit extends Component {
    state = {
        eventi: {
            name: '',
            description: '',
            capacity: '',
            location: '',
            tags: '',
            
        }
    }
    componentDidMount = async () => {
        const toyId = this.props.match.params.toyId
        if (toyId) {
            const eventi = await eventService.getById(toyId)
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
        await this.props.updateEvent(this.state.eventi)
        console.log('new event', this.state.eventi);
        this.props.history.push('/eventi')
    }

    render() {
        const { eventi } = this.state
        return (
            <div className="edit-area">
                <form onSubmit={(event) => this.onSubmit(event)} className="edit-form container">
                    {/* <h1> eventi Edit</h1> */}
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={this.handleChange} value={eventi.name} placeholder="event Name" />
                    <label htmlFor="in-stock">In stock:</label>
                    <input type="checkbox" name="inStock" id="in-stock" onChange={this.handleChange} value={eventi.inStock} />
                    <label htmlFor="img-url">Has Img Url:</label>
                    <input type="checkbox" name="hasImgUrl" id="img-url" onChange={this.handleChange} value={eventi.hasImgUrl} />
                    <label htmlFor="capacity" />
                    <input type="number" name="capacity" id="capacity" onChange={this.handleChange} value={eventi.capacity} placeholder="eventi Price" />
                    <label htmlFor="capacity" />Type:
                    <select name="type" value={eventi.type} onChange={this.handleChange} id="capacity" placeholder="filter by">
                        <option value="all">All</option>
                        <option value="funny">Funny</option>
                        <option value="exciting">Exciting</option>
                        <option value="cute">Cute</option>
                    </select>
                    <button className="save-btn">Save</button>
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
    updateEvent
}
export const EventiEdit = connect(mapStateToProps, mapDispatchToProps)(_EventiEdit)
