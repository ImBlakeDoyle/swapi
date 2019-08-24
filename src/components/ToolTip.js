import React from "react";

const toolTip = (props) => {
    let { character, type } = props;

    return(
        <div>
            {type === "people" ?
            <div className="tool-tip">PEOPLE</div> :
            type === "vehicles" ?
            <div className="tool-tip">VEHICLE</div> :
            type==="starships" ?
            <div className="tool-tip">Starships</div> :
            type==="planets" ?
            <div className="tool-tip">PLANET</div> :
            type==="species" ?
            <div className="tool-tip">SPECIES</div> :
            null
            }
        </div>
    );
}

export default toolTip;