import React from 'react'

import { EventiPreview } from './EventiPreview'

export function EventiList({ events, currTag }) {
    return (
        <React.Fragment>
            {
                events.map(eventi => <EventiPreview eventi={eventi} key={eventi._id} currTag={currTag} />)
            }
        </React.Fragment>
    )
}