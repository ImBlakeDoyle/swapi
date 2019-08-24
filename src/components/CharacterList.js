import React, { useState, useEffect } from "react";
import axios from "axios";

import SingleCharacter from "./SingleCharacter";

// import ToolTip from "./ToolTip";

function CharacterList(props) {

    const { characters, type } = props;

    const [allCharacters, setCharacters] = useState([{}]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        const fetchData = async () => {
            const newList = [];
            for (let i = 0; i < characters.length; i++){
            const response = await axios.get(characters[i]);
            newList.push(response.data);
            console.log("Character fetched!");
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

    return(
        <div>
            <div>
            { !loading ? 
                allCharacters.map((char, index) => {
                    return(
                        <div key={index}>
                            <SingleCharacter character={char} type={type}/>
                        </div>  
                    );
                }) :
                <div>Loading characters...</div>
            }
            </div>
            <div>
            </div>
        </div>
    );
}

export default CharacterList;