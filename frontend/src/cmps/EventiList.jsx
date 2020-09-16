import React from 'react'
import { Link } from 'react-router-dom'

import { EventiPreview } from './EventiPreview'

export function EventiList({ events }) {
    return (
        <React.Fragment>
            {
                events.map(eventi => <EventiPreview eventi={eventi} key={eventi._id} />)
            }
        </React.Fragment>
    )
}