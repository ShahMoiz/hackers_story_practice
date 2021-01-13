

export const InputWithLabel = ({id, type, label, searchTerm, onSearch}) => (
        <div>
            <label htmlFor={id}>{label}:</label>
            <input id={id} type={type} value={searchTerm} onChange={onSearch} />
        </div>
    )
