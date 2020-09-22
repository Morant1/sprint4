import React, { Component } from 'react';
import { EventiPreview } from './EventiPreview'
import { EventiFilter } from './EventiFilter'


export class EventiList extends Component {

    redirectClick = (tag) => {
        this.props.history.push(`/${tag}`)
      }

    render() {
        const { events ,onSetFilter , currTag} = this.props;
    return (
        <React.Fragment>
            <section className="tag-list flex justify-space">
            <div className="tag-item" onClick={(ev) => { this.redirectClick('all') }}>All</div>
            <div className="tag-item" onClick={(ev) => { this.redirectClick('Sport') }}>Sport</div>
            <div className="tag-item" onClick={(ev) => { this.redirectClick('Movies') }}>Movies</div>
            <div className="tag-item" onClick={(ev) => { this.redirectClick('TVShows') }}>TV shows</div>
            <div className="tag-item" onClick={(ev) => { this.redirectClick('Books') }}>Books</div>
            <div className="tag-item" onClick={(ev) => { this.redirectClick('Art') }}>Art</div>
            <div className="tag-item" onClick={(ev) => { this.redirectClick('Comics') }}>Comics</div>
            </section>

            <EventiFilter onSetFilter={onSetFilter}/>
            {
                events.map(eventi => <EventiPreview eventi={eventi} key={eventi._id} currTag={currTag} />)
            }
        </React.Fragment>
    )
}
}


