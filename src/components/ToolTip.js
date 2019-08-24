import React from "react";

const toolTip = (props) => {
    let { character, type } = props;

    return(
        <div>
            {type !== "vehicles" && type !== "starships" ?
                <div>
                    <div>Birth: {character.birth_year}</div>
                    <div>Height: {character.height}cm</div>
                    <div>Weight: {character.mass}kg</div>
                    <div>Eye colour: {character.eye_color}</div>
                    <div>Skin colour: {character.skin_color}</div>
                </div> :
            type !== "people" && type !== "starships" ?
                <div>
                    <div>Vehicle</div>
                </div> :
                    <div>Spaceship</div>}
        </div>
    );
}

export default toolTip;