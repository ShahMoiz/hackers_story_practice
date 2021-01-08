

export const Search = props => {
    
    return (
        <div>
            <label htmlFor="search">Search:</label>
            <input id="search" type="text" onChange={props.onSearch} />
            <p>you are searching <strong>{props.searchData}</strong></p>
        </div>
    )
}