import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchBar(props){

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
    }, [query.text])

    const handleInputChange = (event) => {
        const theQuery = event.target.value;
        setQuery({...query, text: theQuery});

        setQuery({...query, text:theQuery, filteredData: allFilms.allFilms.filter(e =>
                {
                    return (e.title.toLowerCase().includes(theQuery));
                }
            )});
    }

    return(
        <div>
            <input
                type="text"
                placeholder="search"
                value={query.text}
                onChange={(e) => handleInputChange(e)}
            />
            
            {query.filteredData.length > 0  && query.text.length > 1 ?
            <div className="search-container"> 
                <ul>
                    {query.filteredData.map((film, index) => {
                        return(
                            <li key={index} className="search">{film.title}</li>
                        );
                    })}
                </ul> 
            </div>:
            null
            }
        </div>
    );
}

export default SearchBar;