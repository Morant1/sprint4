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
                <div className="tag-list">
                    <div className="tag-item" onClick={(ev) => { this.redirectClick('Sport') }}>Sport</div>
                    <div className="tag-item" onClick={(ev) => { this.redirectClick('Movies') }}>Movies</div>
                    <div className="tag-item" onClick={(ev) => { this.redirectClick('TVShows') }}>TV shows</div>
                    <div className="tag-item" onClick={(ev) => { this.redirectClick('Books') }}>Books</div>
                    <div className="tag-item" onClick={(ev) => { this.redirectClick('Art') }}>Art</div>
                    <div className="tag-item" onClick={(ev) => { this.redirectClick('Comics') }}>Comics</div>
                    <div className="all-tag">
                    <div className="tag-item" onClick={(ev) => { this.redirectClick('All') }}>All</div>
                    </div>
                </div>
                <EventiFilter onSetFilter={onSetFilter} />
            </section>

        )
    }

}

export const SideNav = withRouter(_SideNav)

