import React from "react";

const singleCharacter = async (props) => {

    return(
        <div>{props.characters[0].name}</div>
    );
}

export default singleCharacter;