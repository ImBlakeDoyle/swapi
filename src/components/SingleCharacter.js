import React, {useState, useEffect} from "react";

import ToolTip from "./ToolTip";

const SingleCharacter = (props) => {
    const { character, type } = props;

    const [isHovering, setHover] = useState(false);

    useEffect(() => {
        console.log(`TYPE IS ${type}`);
    }, [])

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
                <ToolTip character={character} type={type}/> :
                null}
            </div>
        </div>
    );
}

export default SingleCharacter;