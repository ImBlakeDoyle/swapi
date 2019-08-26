import React from "react";

const toolTip = (props) => {
    let { category, type } = props;

    //Check the type of category data that is being sent through and render accordingly
    return(
        <span className="dropdown-content">
            {type === "people" ?
            <div className="tool-tip">
                <div>Gender: {category.gender}</div>
                <div>Eyes: {category.eye_color}</div>
                <div>Skin: {category.skin_color}</div>
                <div>Hair: {category.hair_color}</div>
                <div>Height: {category.height}cm</div>
                <div>Weight: {category.mass}kg</div>
            </div> :
            type === "vehicles" ?
            <div className="tool-tip">
                <div>Cargo cap.: {category.cargo_capacity}</div>
                <div>Consumables: {category.consumables}</div>
                <div>Crew: {category.crew}</div>
                <div>Manufacturer: {category.manufacturer}</div>
                <div>Passengers: {category.passengers}</div>
            </div> :
            type==="starships" ?
            <div className="tool-tip">
                <div>Cargo cap.: {category.cargo_capacity}</div>
                <div>Consumables: {category.consumables}</div>
                <div>Crew: {category.crew}</div>
                <div>Manufacturer: {category.manufacturer}</div>
                <div>Passengers: {category.passengers}</div>
            </div> :
            type==="planets" ?
            <div className="tool-tip">
                <div>Climate: {category.climate}</div>
                <div>Diameter: {category.diameter}</div>
                <div>Gravity: {category.gravity}</div>
                <div>Population: {category.population}</div>
                <div>Terrain: {category.terrain}</div>
            </div> :
            type==="species" ?
            <div className="tool-tip">
                <div>Avg. height: {category.average_height}</div>
                <div>Avg. lifespan: {category.average_lifespan}</div>
                <div>Language: {category.language}</div>
            </div> :
            null
            }
        </span>
    );
}

export default toolTip;