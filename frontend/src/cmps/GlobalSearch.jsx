import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

export function GlobalSearch() {
    return (
        <div className="global-search">
              <SearchIcon />
            <input className="input" type="text" autoComplete='off' placeholder="What are you up to?"/>
        </div>
   
    )
}


