import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar";

import { Link } from "react-router-dom";

//make functional with state to hold filtered.
//have method which sets filtered state
//pass that method to searchbar component

function FilmList(props){
    console.log(props);

    return(
        <div>
            <hr/>
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
        </div>
    );
}

export default FilmList;