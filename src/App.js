import React, {useEffect, useState} from "react";
import axios from "axios";


function App (){

    const [favourited, setFavourited] = useState([]);
    const [allFilms, setFilms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://swapi.co/api/films/")
            setFilms(response.data.results);
            console.log(response.data.results);
            console.log(favourited);
        };
        fetchData();
    }, []);

    return(
        <div>
            <div>
            {(!allFilms) ? <div>Loading...</div> : 
                <ul>
                    {allFilms.map((film, index) => {
                        return(
                            <div key={index}>
                                <li>{film.title}</li> 
                                <button onClick={() => {
                                    setFavourited([...favourited, film]);
                                    let updatedFilms = allFilms;
                                    updatedFilms.splice(index, 1);
                                    setFilms(updatedFilms);
                                }}>Favourite</button>
                            </div>
                        );
                    })}
                </ul>
            }
            </div>
            <div>
            {(!favourited.length) ? <div>No favs</div> :
                <ul>
                    {favourited.map((film, index) => {
                        return(
                            <div key={index}>
                                <li>{film.title}</li>
                            </div>
                        )
                    })}
                </ul>
            }
            </div>
        </div>
    );
}

export default App;