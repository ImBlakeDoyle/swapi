import React, {useEffect, useState} from "react";
import DisplayFilms from "./components/DisplayFilms";
import axios from "axios";


function App (){

    const [favourited, setFavourited] = useState([]);
    const [allFilms, setFilms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://swapi.co/api/films/")
            setFilms(response.data.results);
        };
        fetchData();
    }, []);

    const favouriteAddHandler = (film, index) => {
        setFavourited([...favourited, film]);
        let updatedFilms = allFilms;
        updatedFilms.splice(index, 1);
        setFilms(updatedFilms);
    }

    return(
        <div>
            <div>
            {(!favourited.length) ? <div>No current favourites</div> :
                <div>
                    <h2>Favourites</h2>
                    <ul>
                        {favourited.map((film, index) => {
                            return(
                                <div key={index}>
                                    <li>{film.title}</li>
                                </div>
                            )
                        })}
                    </ul>
                    <hr/>
                </div>
            }
            </div>
            <div>
                {(!allFilms) ? <div>Loading...</div> :
                    <DisplayFilms 
                    films={allFilms} 
                    addToFav={favouriteAddHandler}/>
                }
            </div>
            
        </div>
    );
}

export default App;