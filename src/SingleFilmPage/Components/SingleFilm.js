import React from "react";
import Moment from 'react-moment';

import CategoryList from "./CategoryList";

//Rendering information about an individual film to the screen and passing information
//regarding components such as people, vehicles, etc, to be used in conjunction with the tooltip
const singleFilm = (props) => {
    const { film } = props;

    return(
        <div className="single-film-container">
            <h1>{film.title}</h1>
            <h3>Episode {film.episode_id}</h3>
            <div>Released: <Moment format="DD/MM/YYYY">{film.release_date}</Moment> </div>
            <div>Directed by: {film.director}</div>
            <div>Produced by: {film.producer}</div>
            <p><i>{film.opening_crawl}</i></p>
            
            <h3>People</h3>
            <CategoryList category={film.characters} type="people"/>
            <hr/>

            <h3>Starships</h3>
            <CategoryList category={film.starships} type="starships"/>
            <hr/>

            <h3>Vehicles</h3>
            <CategoryList category={film.vehicles} type="vehicles"/>
            <hr/>

            <h3>Planets</h3>
            <CategoryList category={film.planets} type="planets"/>
            <hr/>

            <h3 className="species">Species</h3>
            <CategoryList category={film.species} type="species" />
            <hr/>
        </div>
    );
}

export default singleFilm;