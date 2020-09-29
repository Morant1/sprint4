import React, { Component } from 'react';
import { EventiFilter } from './EventiFilter'
import { withRouter } from "react-router";


export class _SideNav extends Component {

    componentDidMount() {
        setTimeout(() => {
            document.querySelector('.side-nav').classList.add('trans');
            
        }, 200);
    }
    redirectClick = (tag) => {
        this.props.history.push(`/${tag}`)
    }

    render() {
        const {onSetFilter} = this.props;
        return (

            <section className="side-nav flex">
                <ul className="tag-list">
                    <li className="tag-item" onClick={(ev) => { this.redirectClick('TVShows') }}>TV shows</li>
                    <li className="tag-item" onClick={(ev) => { this.redirectClick('Sport') }}>Sport</li>
                    <li className="tag-item" onClick={(ev) => { this.redirectClick('Movies') }}>Movies</li>
                    <li className="tag-item" onClick={(ev) => { this.redirectClick('Comics') }}>Comics</li>
                    <li className="tag-item" onClick={(ev) => { this.redirectClick('Books') }}>Books</li>
                    <li className="tag-item" onClick={(ev) => { this.redirectClick('Art') }}>Art</li>
                    <ul className="all-tag">
                    <li className="tag-item" onClick={(ev) => { this.redirectClick('your_events') }}>Your events</li>
                    <li className="tag-item" onClick={(ev) => { this.redirectClick('All') }}>All</li>
                    </ul>
                </ul>
                <EventiFilter onSetFilter={onSetFilter} />
            </section>

        )
    }

}

export const SideNav = withRouter(_SideNav)

