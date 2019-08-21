import React from "react";

const displayFavs = (props) => {
    return(
        <div>
            <h2>Favourites</h2>
                <ul>
                    {props.favFilms.map((film, index) => {
                        return(
                            <div key={index}>
                                <li>{film.title}</li> 
                                <button onClick={() => {props.removeFromFav(film, index)}}>Remove</button>
                            </div>
                        );
                    })}
                </ul>
        </div>
    );
}

export default displayFavs;