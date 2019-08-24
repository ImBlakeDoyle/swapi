import React from "react";

const toolTip = (props) => {
    const { character } = props;
    return(
        <div>
            <div>{character.birth_year}</div>
            <div>{character.height}</div>
            <div>{character.mass}</div>
            <div>{character.eye_color}</div>
            <div>{character.skin_color}</div>
        </div>
    );
}

export default toolTip;