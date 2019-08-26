import React, {useState, useEffect} from "react";

import ToolTip from "./ToolTip";

const SingleCategoryItem = (props) => {
    const { category, type } = props;

    const [isHovering, setHover] = useState(false);

    useEffect(() => {
        console.log(`TYPE IS ${type}`);
    }, [])

    //Handler to trigger tooltip
    const mouseEnterHandler = () => {
        setHover(true);
    }

    //Handler to remove tooltip
    const mouseLeaveHandler = () => {
        setHover(false);
    }

    //Render the name of each single item in a category and pass off data about each
    //to the tooltip so it can be rendered on hover
    return(
        <span className="dropdown">
            <span
            className="dropbtn"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}>
            {category.name}
            </span>
            <div>
                {isHovering ? 
                <ToolTip category={category} type={type}/> :
                null}
            </div>
        </span>
    );
}

export default SingleCategoryItem;