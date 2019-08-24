import React, {useState} from "react";

import ToolTip from "./ToolTip";

const SingleCharacter = (props) => {
    const { character } = props;

    const [isHovering, setHover] = useState(false);

    const mouseHandler = () => {
        setHover(!isHovering);
    }

    return(
        <div>
            <div 
            onMouseOver={mouseHandler}
            onMouseLeave={mouseHandler}>
            {character.name}
            </div>
            <div>
                {isHovering ? 
                <ToolTip character={character} /> :
                null}
            </div>
        </div>
    );
}

export default SingleCharacter;