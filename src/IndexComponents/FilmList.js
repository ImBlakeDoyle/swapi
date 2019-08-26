import React, { useState } from "react";
import SearchBar from "./SearchBar";

import { Link } from "react-router-dom";

function FilmList(props){

    //State used in searchbar component
    const [query, setQuery] = useState({
        text: "",
        filteredData: []
    })

    //Hanlder for returning filtered list of films in searchbar component by comparing with
    //the list of all the films
    const handleInputChange = (event) => {
        const theQuery = event.target.value;
        setQuery({...query, text: theQuery});

        setQuery({...query, text:theQuery, filteredData: props.films.allFilms.filter(e =>
                {
                    return (e.title.toLowerCase().includes(theQuery));
                }
            )});
    }

    //Check if there is filtered data in the search component and rendering such.
    //If searchbar is not being used or if there are no films that match the searchbar value
    //then display all films
    return(
        <div>
            <SearchBar
            handleChange={handleInputChange}
            query={query}/>

            {query.filteredData.length > 0  && query.text.length > 1 ?
                <ul className="film-title-list">
                    {query.filteredData.map((film, index) => {
                        if (film.favourite === true){
                            return(
                                <div key={index} className="film-title">
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
                                <div key={index} className="film-title">
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
                </ul> :
                <ul className="film-title-list">
                    {props.films.allFilms.map((film, index) => {
                        if (film.favourite === true){
                            return(
                                <div key={index} className="film-title">
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
                                <div key={index} className="film-title">
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