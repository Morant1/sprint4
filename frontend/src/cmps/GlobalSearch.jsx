import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { eventBus } from '../services/event-bus-service';

export function GlobalSearch() {
    return (
        <div className="global-search">
            <SearchIcon />
            <input className="input"
                type="text"
                autoComplete='off'
                // onChange={(ev) => {
                //     BusService.emit('searchUpdated', ev.target.value)}}
                    placeholder = "What are you up to?" />
        </div>

    )
}


