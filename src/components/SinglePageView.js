import React from "react";

const singlePageView = (props) => {
    console.log(props.match.params.id);
    console.log(props.location.query);
    return(
        <div>
            {props.location.query ?
                <h2>{props.location.query.films.favourited[props.match.params.id].title}</h2> :
                <h1>Not here</h1>
            }
        </div>
    );
}

export default singlePageView;