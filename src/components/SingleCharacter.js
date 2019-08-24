import React, {useState, useEffect} from "react";

import ToolTip from "./ToolTip";

const SingleCharacter = (props) => {
    const { character, type } = props;

    const [isHovering, setHover] = useState(false);

    useEffect(() => {
        console.log(`TYPE IS ${type}`);
    }, [])

    const mouseEnterHandler = () => {
        setHover(true);
    }
    const mouseLeaveHandler = () => {
        setHover(false);
    }


    return(
        <span className="line-test">
            <span className="list-item"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}>
            {character.name}
            </span>
            <div>
                {isHovering ? 
                <ToolTip character={character} type={type}/> :
                null}
            </div>
        </span>
    );
}

export default SingleCharacter;