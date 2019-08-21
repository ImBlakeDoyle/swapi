import React from "react";

const displayFilms = (props) => {

    return(
        <ul>
            {props.films.map((film, index) => {
                return(
                    <div key={index}>
                        <li>{film.title}</li> 
                        <button onClick={() => {props.addToFav(film, index)}}>Add</button>
                    </div>
                );
            })}
        </ul>
    );
}

export default displayFilms;