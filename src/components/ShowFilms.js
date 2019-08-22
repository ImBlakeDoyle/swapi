import React from "react";
import { Link } from "react-router-dom";

const showFilms = (props) => {
    return(
        <div>
            <h2>Favourited</h2>
            {props.films.favourited.length == 0 ?
            <div>Click to add any to favourites!</div> :
            <ul>
                {props.films.favourited.map((film, index) => {
                    return(
                        <div key={index}>
                            <Link to={{
                                pathname: `/film/${film.title}`,
                                query:{
                                    // films: props.films,
                                    film: film,
                                    // index: index
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
                            <li>{film.title}</li> 
                            <button onClick={() => {props.addFav(film, index)}}>Add</button>
                        </div>
                    );
                })}
            </ul>
            }
        </div>
    );
}

export default showFilms;