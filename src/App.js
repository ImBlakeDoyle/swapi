import React, {useEffect, useState} from "react";
import DisplayFilms from "./components/DisplayFilms";
import DisplayFavs from "./components/DisplayFavs";
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
        console.log(allFilms);
    }

    const favouriteRemoveHandler = (film, index) => {
        setFilms([...allFilms, film]);
        let updatedFavourites = favourited;
        updatedFavourites.splice(index, 1);
        setFavourited(updatedFavourites);
    }

    return(
        <div>

            <div>
                {(favourited.length === 0) ? <div>No current favourites</div> :
                    <DisplayFavs
                    favFilms={favourited}
                    removeFromFav={favouriteRemoveHandler} />
                }
            </div>
            <div>
                {(!allFilms) ? <div>Loading...</div> :
                    <DisplayFilms 
                    regFilms={allFilms} 
                    addToFav={favouriteAddHandler}/>
                }
            </div>
            
        </div>
    );
}

export default App;