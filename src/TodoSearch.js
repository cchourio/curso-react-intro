import './TodoSearch.css'

function TodoSearch() {
    return(
        <input className='TodoSearch' placeholder='Search' onChange={(event) => {
            console.log('Search')
            console.log(event)
            console.log(event.target)
            console.log(event.target.value)
        }} />
    );
}

export { TodoSearch };