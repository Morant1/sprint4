import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { loadEvents } from '../store/actions/eventActions';

export class _EventsGrid extends Component {
    // state={
    //     eventi:{

    //     }
    //     tags:[
    //         ""
    //     ]
    // }
    componentDidMount() {
        this.props.loadEvents()
        console.log("mount", this.props);
    }
    redirectClick = (tag) => {
        this.props.history.push(`/${tag}`)
    }
    // Todo : map on tags array
    render() {
        return (
            // <img src={require(`../assets/img/${eventi.tags[0]}2.jpg`)} />
            <section className="events-grid margin container">
                <div className="event-card" onClick={(ev) => { this.redirectClick('Sport') }}>
              <img src={require('../assets/img/Sport.jpg')} />
                <div className="tag-wrapper"><span className="tag">Sport</span></div>
                </div>
                <div className="event-card" onClick={(ev) => { this.redirectClick('Movies') }}>
                    <img src={require('../assets/img/Movies.jpg')} />
                    <div className="tag-wrapper"><span className="tag">Movies</span></div>
                    
                </div>
                <div className="event-card span" onClick={(ev) => { this.redirectClick('Books') }}>
                    <img src={require('../assets/img/Books.jpg')} />
                    <div className="tag-wrapper"><span className="tag">Books</span></div>
                    
                </div>
                <div className="event-card span" onClick={(ev) => { this.redirectClick('Art') }}>
                    <img src={require('../assets/img/Art.jpg')} />
                    <div className="tag-wrapper"> <span className="tag">Art</span></div>
                   
                </div>
                <div className="event-card" onClick={(ev) => { this.redirectClick('TVShows') }}>
                    <img src={require('../assets/img/TVShows.jpg')} />
                    <div className="tag-wrapper"><span className="tag">TV Shows</span></div>
                    
                </div>
                <div className="event-card" onClick={(ev) => { this.redirectClick('Comics') }}>
                    <img src={require('../assets/img/Comics.jpg')} />
                    <div className="tag-wrapper"><span className="tag">Comics</span></div>
                    

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