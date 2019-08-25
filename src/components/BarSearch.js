import React, { useState, useEffect } from "react";
import axios from "axios";

function BarSearch(props){

    // const [allFilms, grabFilms] = useState();
    // const [query, setQuery] = useState({
    //     text: "",
    //     filteredData: []
    // })

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await axios.get("https://swapi.co/api/films/")
    //         grabFilms({allFilms: response.data.results});
    //     };
    //     fetchData();
    // }, []);

    // useEffect(() => {
    // }, [query.text])

    // const handleInputChange = (event) => {
    //     const theQuery = event.target.value;
    //     setQuery({...query, text: theQuery});

    //     setQuery({...query, text:theQuery, filteredData: allFilms.allFilms.filter(e =>
    //             {
    //                 return (e.title.toLowerCase().includes(theQuery));
    //             }
    //         )});
    // }

    return(
        <div>
            <input
                type="text"
                placeholder="search"
                value={props.query.text}
                onChange={(e) => props.handleChange(e)}
            />
        </div>
    );
}

export default BarSearch;