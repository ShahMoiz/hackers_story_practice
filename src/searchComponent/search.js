

export const Search = props => {
    const {searchTerm, onSearch} = props;
    return (
        <div>
            <label htmlFor="search">Search:</label>
            <input id="search" type="text" value={searchTerm} onChange={onSearch} />
            <p>you are searching <strong>{searchTerm}</strong></p>
        </div>
    )
}
