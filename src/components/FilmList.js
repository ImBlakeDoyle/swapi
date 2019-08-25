import React, { useState } from "react";
import BarSearch from "./BarSearch";

import { Link } from "react-router-dom";

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

            {query.filteredData.length > 0  && query.text.length > 1 ?
                <ul>
                    {query.filteredData.map((film, index) => {
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