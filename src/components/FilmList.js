import React, { useState, useEffect } from "react";
import BarSearch from "./BarSearch";

import { Link } from "react-router-dom";

//make functional with state to hold filtered.
//have method which sets filtered state
//pass that method to searchbar component

function FilmList(props){

    const [query, setQuery] = useState({
        text: "",
        filteredData: []
    })

    const handleInputChange = (event) => {
        const theQuery = event.target.value;
        setQuery({...query, text: theQuery});

        setQuery({...query, text:theQuery, filteredData: props.films.allFilms.filter(e =>
                {
                    return (e.title.toLowerCase().includes(theQuery));
                }
            )});
    }


    return(
        <div>
            <BarSearch 
            handleChange={handleInputChange}
            query={query}/>
            <hr/>

            {/* Loop through filtered array, if element in array
                is also within allFilms, then do the below mapping
                Otherwise don't render that element */}

            {query.filteredData.length > 0  && query.text.length > 1 ?
                <ul>
                    {query.filteredData.map((film, index) => {
                        return(
                            <li key={index}>{film.title}</li>
                        );
                    })} 
                </ul> :
                    <ul>
                    {props.films.allFilms.map((film, index) => {
                        if (film.favourite === true){
                            return(
                                <div key={index}>
                                    <Link to={{
                                        pathname: `/film/${film.title}`,
                                        query:{
                                            film: film,
                                        }
                                    }}><li>{film.title}</li></Link>
                                    <button onClick={() => {props.removeFav(film, index)}}>Unfavourite</button>
                                </div>
                            );
                        } else {
                            return(
                                <div key={index}>
                                    <Link to={{
                                        pathname: `/film/${film.title}`,
                                        query:{
                                            film: film,
                                        }
                                    }}><li>{film.title}</li></Link>
                                    <button onClick={() => {props.addFav(film, index)}}>Favourite</button>
                                </div> 
                            );
                        }
                    })}
                </ul>
            }

        </div>
    );
}

export default FilmList;