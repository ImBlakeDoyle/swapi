import React from "react";

const toolTip = (props) => {
    let { character, type } = props;

    return(
        <span className="dropdown-content">
            {type === "people" ?
            <div className="tool-tip">
                <div>Gender: {character.gender}</div>
                <div>Eyes: {character.eye_color}</div>
                <div>Skin: {character.skin_color}</div>
                <div>Hair: {character.hair_color}</div>
                <div>Height: {character.height}cm</div>
                <div>Weight: {character.mass}kg</div>
            </div> :
            type === "vehicles" ?
            <div className="tool-tip">
                <div>Cargo cap.: {character.cargo_capacity}</div>
                <div>Consumables: {character.consumables}</div>
                <div>Crew: {character.crew}</div>
                <div>Manufacturer: {character.manufacturer}</div>
                <div>Passengers: {character.passengers}</div>
            </div> :
            type==="starships" ?
            <div className="tool-tip">Starships</div> :
            type==="planets" ?
            <div className="tool-tip">PLANET</div> :
            type==="species" ?
            <div className="tool-tip">SPECIES</div> :
            null
            }
        </span>
    );
}

export default toolTip;