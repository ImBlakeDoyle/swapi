import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar";

import { Link } from "react-router-dom";

//make functional with state to hold filtered.
//have method which sets filtered state
//pass that method to searchbar component

function FilmList(props){

    const [query, setQuery] = useState({
        text: "",
        filteredData: []
    })

    useEffect(() => {

    }, [query.text])

    const handleInputChange = (event) => {
        const theQuery = event.target.value;
        setQuery({...query, text: theQuery});

        setQuery({...query, text:theQuery, filteredData: props.films.favourited.filter(e =>
                {return (e.title.toLowerCase().includes(theQuery));
                }
            )})
    }

    return(
        <div>
            {/* <SearchBar handleInputChange={handleInputChange} text={query.text}/> */}
            <h2>Favourited</h2>
            {props.films.favourited.length === 0 ?
            <div>Click to add any to favourites!</div> :
            <ul>
                {props.films.favourited.map((film, index) => {
                    return(
                        //If the film name exists within filtered array
                        //then null, otherwise...
                        <div key={index}>
                            <Link to={{
                                pathname: `/film/${film.title}`,
                                query:{
                                    film: film,
                                }
                            }}><li>{film.title}</li></Link>
                            <button onClick={() => {props.removeFav(film, index)}}>Remove</button>
                        </div>
                    );
                })}
            </ul>
            }
            
            <hr/>
            {props.films.allFilms.length === 0 && props.films.favourited.length === 0 ? 
            <div>Loading...</div> :
            <ul>
                {props.films.allFilms.map((film, index) => {
                    return(
                        <div key={index}>
                            <Link to={{
                                pathname: `/film/${film.title}`,
                                query:{
                                    film: film,
                                }
                            }}><li>{film.title}</li></Link>
                            <button onClick={() => {props.addFav(film, index)}}>Add</button>
                        </div>
                    );
                })}
            </ul>
            }
        </div>
    );
}

export default FilmList;