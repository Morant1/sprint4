import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {  BusService } from '../services/event-bus-service';

export function GlobalSearch() {
    return (
        <div className="global-search">
            <SearchIcon />
            <input className="input"
                type="text"
                name="title"
                autoComplete='off'
                onChange={(ev) => {
                    BusService.emit('searchUpdated', ev)}}
                    placeholder = "What are you up to?" />
        </div>

    )
}


