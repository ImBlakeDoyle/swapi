import React, { useState, useEffect } from "react";
import axios from "axios";

function CharacterList({ characters }) {

    const [allCharacters, setCharacters] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const [isHovering, setHovering] = useState(false);

    useEffect(() => { 
        const fetchData = async () => {
            const newList = [];
            for (let i = 0; i < characters.length; i++){
            const response = await axios.get(characters[i]);
            newList.push(response.data);
            }
            setLoading(false);
            setCharacters(newList);
        };
        if (loading) {
        fetchData();
        }
        else {
            return;
        }
    }, [allCharacters]);

    const mouseOverHandler = () => {
        setHovering(true);
    }

    const mouseOutHandler = () => {
        setHovering(false);
    }


    return(
        <div>
            <div>
            {
                !loading ? 
                <div 
                onMouseOver={mouseOverHandler}
                onMouseLeave={mouseOutHandler}
                >{allCharacters[0].name}</div> :
                <div>Loading...</div>
            }
            </div>
            <div>
                {
                    isHovering ?
                    <div>{allCharacters[0].height}</div> :
                    <div>Not hovering</div>

                }
            </div>
        </div>
    );
}

export default CharacterList;