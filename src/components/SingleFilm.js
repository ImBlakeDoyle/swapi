import React from "react";
import Moment from 'react-moment';

const singleFilm = (props) => {

    const { film } = props;
    return(
        <div>
            <h1>{film.title}</h1>
            <h3>Episode {film.episode_id}</h3>
            <div>Created: <Moment format="DD/MM/YYYY">{film.created}</Moment> </div>
            <p><i>{film.opening_crawl}</i></p>
        </div>
    );
}

export default singleFilm;