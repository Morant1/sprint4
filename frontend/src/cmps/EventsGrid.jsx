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
                <div className="event-card" 
                style={{backgroundImage:`url(${require('../assets/img/Sport.jpg')})`}}
                onClick={(ev) => { this.redirectClick('Sport') }}>
                    <div className="tag">Sport</div>

                </div>
                
                <div className="event-card" 
                style={{backgroundImage:`url(${require('../assets/img/Movies.jpg')})`}}
                onClick={(ev) => { this.redirectClick('Movies') }}>
                    <div className="tag ">Movies</div>
                </div>
                <div className="event-card span" 
                style={{backgroundImage:`url(${require('../assets/img/Books.jpg')})`}}
                onClick={(ev) => { this.redirectClick('Books') }}>
                    <div className="tag">Books</div>
                </div>
                <div className="event-card span"
                 style={{backgroundImage:`url(${require('../assets/img/Art.jpg')})`}}
                onClick={(ev) => { this.redirectClick('Art') }}>
                    <div className="tag">Art</div>
                </div>
                <div className="event-card" 
                 style={{backgroundImage:`url(${require('../assets/img/TVShows.jpg')})`}}
                 onClick={(ev) => { this.redirectClick('TVShows') }}>
                    <div className="tag">TV Shows</div>
            
                </div>
                <div className="event-card"
                style={{backgroundImage:`url(${require('../assets/img/Comics.jpg')})`}}
                 onClick={(ev) => { this.redirectClick('Comics') }}>
                    <div className="tag">Comics</div>
                    {/* <img src={require('../assets/img/Comics.jpg')}></img> */}

                </div>
                {/* <div className="event-card" onClick={(ev) => { this.redirectClick('All') }}>
                    <span className="tag-comics">Recommendation</span>
                    <img src={require('../assets/img/ev101.jpg')}></img>

                </div> */}
                {/* <div className="event-card" onClick={(ev) => { this.redirectClick('All') }}>
                    <span className="tag-comics">Recommendation</span>
                    <img src={require('../assets/img/ev101.jpg')}></img>

                </div> */}
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