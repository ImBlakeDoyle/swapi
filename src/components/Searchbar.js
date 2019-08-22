import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchBar (){

    const [allFilms, grabFilms] = useState();
    const [query, setQuery] = useState({
        text: "",
        filteredData: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://swapi.co/api/films/")
            grabFilms({allFilms: response.data.results});
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(query.text);
    }, [query.text])

    const handleInputChange = (event) => {
        const theQuery = event.target.value;
        setQuery({...query, text: theQuery});

        setQuery({...query, text:theQuery, filteredData: allFilms.allFilms.filter(e =>
                {return (e.title.toLowerCase().includes(theQuery));
                }
            )})
        console.log(query.filteredData);
    }

    return(
        <div>
            <h2>Search</h2>
            <input
                type="text"
                placeholder="search"
                value={query.text}
                onChange={(e) => handleInputChange(e)}
            />
            {query.filteredData.length > 0  && query.text.length > 1 ? 
            <ul>
                {query.filteredData.map((film, index) => {
                    return(
                        <li key={index}>{film.title}</li>
                    );
                })}
            </ul> :
            <div>Nothing filtered</div>
            }
        </div>
    );
}

export default SearchBar;