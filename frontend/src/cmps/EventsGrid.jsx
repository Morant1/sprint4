import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { loadEvents } from '../store/actions/eventActions';

export class _EventsGrid extends Component {

    componentDidMount(){
        this.props.loadEvents()
        console.log("mount",this.props);
    }
    redirectClick = (tag) => {
        this.props.history.push(`/${tag}`)
    }

    render() {
        return (
            <section className="events-grid margin container">
                <div className="event-card" onClick={(ev) => { this.redirectClick('Sport') }}>
                    <span className="tag-sport">Sport</span>
                    <img src={require('../assets/img/Sport.jpg')}></img>

                </div>
                
                <div className="event-card span" onClick={(ev) => { this.redirectClick('Movies') }}>
                    <span className="tag-movies">Movies</span>
                    <img src={require('../assets/img/Movies.jpg')} />

                </div>
                <div className="event-card" onClick={(ev) => { this.redirectClick('Books') }}>
                    <span className="tag-books">Books</span>
                    <img src={require('../assets/img/Books.jpg')} />

                </div>
                <div className="event-card span" onClick={(ev) => { this.redirectClick('Art') }}>
                    <span className="tag-art">Art</span>
                    <img src={require('../assets/img/Art.jpg')}></img>

                </div>
                <div className="event-card" onClick={(ev) => { this.redirectClick('TVShows') }}>
                    <span className="tag-tvshows">TV Shows</span>
                    <img src={require('../assets/img/TVShows.jpg')}></img>

                </div>
                <div className="event-card" onClick={(ev) => { this.redirectClick('Comics') }}>
                    <span className="tag-comics">Comics</span>
                    <img src={require('../assets/img/Comics.jpg')}></img>

                </div>
                <div className="event-card" onClick={(ev) => { this.redirectClick('All') }}>
                    <span className="tag-comics">Recommendation</span>
                    <img src={require('../assets/img/ev101.jpg')}></img>

                </div>
                <div className="event-card" onClick={(ev) => { this.redirectClick('All') }}>
                    <span className="tag-comics">Recommendation</span>
                    <img src={require('../assets/img/ev101.jpg')}></img>

                </div>
            </section>
        )
    }
}




const mapStateToProps = state => {
    return {
        events: state.eventReducer.events,

    };
};
const mapDispatchToProps = {
    loadEvents,

};

export const EventsGrid = connect(mapStateToProps, mapDispatchToProps)(withRouter(_EventsGrid))





// {
//     events.map(eventi => <div className="event-card" onClick={(ev) => { this.redirectClick(`${tag}`) }}>
//     <span className="tag-sport">Sport</span>
//     <img src={require(`../assets/img/${tag}.jpg`)}></img>
    
//     </div>)
// }