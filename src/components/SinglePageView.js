import React from "react";

const singlePageView = (props) => {
    console.log(props.location.query);
    return(
        <div>
            {props.location.query ?
                <h2>It is here</h2> :
                <h1>Not here</h1>
            }
        </div>
    );
}

export default singlePageView;