import React from "react";

const notification = (props) => {

    return(
        <div>
            {props.display ?
            <div className="notification">
                <div className="notification-message">{props.film} has been {props.message} favourites</div>
                <button onClick={() => props.toggleNotification()} className="notification-button">x</button>
            </div> :
            null
            }
        </div>
    );
}

export default notification;