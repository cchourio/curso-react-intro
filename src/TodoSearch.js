import React from 'react';
import './TodoSearch.css'

function TodoSearch() {

    const [searchValue, setSearchValue] = React.useState('');

    console.log(searchValue)

    return(
        <input className='TodoSearch' placeholder='Search' value={searchValue} onChange={(event) => {
            setSearchValue(event.target.value)
        }} />
    );
}

export { TodoSearch };