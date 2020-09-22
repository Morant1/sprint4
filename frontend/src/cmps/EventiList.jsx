import React from 'react'
import { EventiPreview } from './EventiPreview'
import { EventiFilter } from './EventiFilter'

export function EventiList({ events ,onSetFilter , currTag, onAddParticipant}) {
    return (
        <React.Fragment>
            <EventiFilter onSetFilter={onSetFilter}/>
            {
                events.map(eventi => <EventiPreview eventi={eventi} key={eventi._id} currTag={currTag} onAddParticipant={onAddParticipant} />)
            }
        </React.Fragment>
    )
}