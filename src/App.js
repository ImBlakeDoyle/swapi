import React, {useEffect, useState} from "react";
import axios from "axios";


function App (){

    const [favourited, setFavourited] = useState([]);
    const [allFilms, setFilms] = useState([{}]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://swapi.co/api/films/")
            setFilms(response.data.results);
            console.log(response.data.results);
        };
        fetchData();
    }, []);

    return(
        <div>
            {(allFilms.length <= 1) ? <div>Loading...</div> : 
            <ul>
                {allFilms.map((film, index) => {
                    return(
                        <li key={index}>{film.title}</li>
                    );
                })}
            </ul>
 }
            
        </div>
    );
}

export default App;