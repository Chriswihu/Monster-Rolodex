import React from 'react';
import "../styles/SearchBox.css";

const SearchBox = ({placeholder, changeHandler}) => {
    return (
        <div>
            <input
                className="search"
                type="search"
                placeholder={placeholder}
                onChange={changeHandler}
            />

        </div>
    );
};

export default SearchBox;