import React from "react";
import SingleFilm from "./SingleFilm";
import { Redirect, Link } from "react-router-dom";

const singlePageView = (props) => {
    console.log(props.location.query);
    return(
        <div>
            {props.location.query ?
                <div>
                    <Link to ="/"><button>Home</button></Link>
                    <SingleFilm film={props.location.query.film} />
                </div>
                :
                <Redirect to="/" />
            }
        </div>
    );
}

export default singlePageView;