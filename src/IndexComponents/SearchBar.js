import React from "react";

function SearchBar(props){
    return(
        <div className="searchbar">
            <input
                type="text"
                placeholder="search"
                value={props.query.text}
                onChange={(e) => props.handleChange(e)}
            />
        </div>
    );
}

export default SearchBar;