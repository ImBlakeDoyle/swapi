import React from "react";
import SingleFilm from "./Components/SingleFilm";
import { Redirect, Link } from "react-router-dom";

//View for each individual film
const singlePageView = (props) => {
    return(
        <div>
            {props.location.query ?
                <div className="container">
                    <div className="home-button">
                    <Link to ="/"><button>Home</button></Link>
                    </div>
                    <SingleFilm film={props.location.query.film} />
                </div>
                :
                <Redirect to="/" />
            }
        </div>
    );
}

export default singlePageView;