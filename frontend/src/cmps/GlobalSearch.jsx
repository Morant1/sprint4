import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

export function GlobalSearch() {
    return (
        <div className="global-search">
              <SearchIcon />
            <input type="text" autoComplete='off' placeholder="What are you up to?"/>
            
  {/* <SearchIcon /> */}
{/* 
<InputBase
  placeholder="Search…"
  inputProps={{ 'aria-label': 'search' }}
/> */}

            {/* <img className="search-icon" src={require('../assets/icons/search-outline.svg')} alt="search" /> */}
        </div>
   
    )
}


