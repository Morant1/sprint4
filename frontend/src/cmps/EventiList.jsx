import React, { Component } from 'react';
import { EventiPreview } from './EventiPreview'
import { withRouter } from "react-router";



export class _EventiList extends Component {

    redirectClick = (tag) => {
        this.props.history.push(`/${tag}`)
      }

    render() {
        const { events ,currTag} = this.props;
    return (
        <ul className="preview-grid">
            {
                events.map(eventi => <EventiPreview eventi={eventi} key={eventi._id} currTag={currTag} />)
            }
        </ul>
    )
}
}

export const EventiList = withRouter(_EventiList)

