import React from "react";


export const InputWithLabel = ({id, children, type, isFocused, searchTerm, onSearch}) => {
    const inputRef = React.useRef();
    React.useEffect(() => {
        if(isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused])   
    return (
        <div>
            <label htmlFor={id}>{children}:</label>
            <input id={id} type={type} value={searchTerm} autoFocus={inputRef} onChange={onSearch} />
        </div>
    )}
