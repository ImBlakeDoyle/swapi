import React from "react";

const notification = (props) => {

    return(
        <div>
            {props.display ?
            <div>
            <p>{props.film} has been {props.message} favourites</p>
            <button onClick={() => props.toggleNotification()}>Close</button>
            </div> :
            null
            }
        </div>
    );
}

export default notification;