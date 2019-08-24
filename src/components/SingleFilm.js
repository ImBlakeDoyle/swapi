import React from "react";
import Moment from 'react-moment';

import CharacterList from "./CharacterList";

const singleFilm = (props) => {
    const { film } = props;

    return(
        <div>
            <h1>{film.title}</h1>
            <h3>Episode {film.episode_id}</h3>
            <div>Released: <Moment format="DD/MM/YYYY">{film.release_date}</Moment> </div>
            <div>Directed by: {film.director}</div>
            <div>Produced by: {film.producer}</div>
            <p><i>{film.opening_crawl}</i></p>
            
            <CharacterList characters={film.characters} type="people"/>
            <CharacterList characters={film.starships} type="starships"/>
            <CharacterList characters={film.vehicles} type="vehicles"/>
            <CharacterList characters={film.planets} type="planets"/>
            <CharacterList characters={film.species} type="species" />
        </div>
    );
}

export default singleFilm;