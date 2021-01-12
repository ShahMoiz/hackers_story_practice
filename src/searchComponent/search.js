

export const Search = ({searchTerm, onSearch}) => (
        <div>
            <label htmlFor="search">Search:</label>
            <input id="search" type="text" value={searchTerm} onChange={onSearch} />
            <p>you are searching <strong>{searchTerm}</strong></p>
        </div>
    )
