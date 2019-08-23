import React, { useState, useEffect } from "react";
import axios from "axios";

function Test({ characters }) {

    const [idiots, setCharacters] = useState([{}]);
    const [loading, setLoading] = useState(true);

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
    }, [idiots]);

    return(
        <div>{
            !loading ? 
            <div>{idiots[0].name}</div> :
            <div>Loading...</div>
        }</div>
    );
}

export default Test;