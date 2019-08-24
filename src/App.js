import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";

import Notification from "./components/Notification";
import FilmList from "./components/FilmList";
import SearchBar from "./components/Searchbar";

function App (){

    const [films, setMovies] = useState({
        allFilms: [],
        favourited: []
    });

    const [notificationStatus, setNotificationStatus] = useState({
        isActive: false,
        message: "",
        film: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://swapi.co/api/films/")
            setMovies({...films, allFilms: response.data.results});
        };
        const data = localStorage.getItem("films");
        if (data){
            setMovies(JSON.parse(data));
        } else {
        fetchData();
        }
    }, []);

    const favouriteAddHandler = (film, index) => {
        let updatedFavs = films.favourited;
        updatedFavs.push(film);
        setMovies({...films, favourited: updatedFavs});

        let updatedFilms = films.allFilms;
        updatedFilms.splice(index, 1);
        setMovies({...films, allFilms: updatedFilms});
        setNotificationStatus({isActive: true, message: "added to", film: film.title});

        localStorage.setItem("films", JSON.stringify(films));
    }

    const favouriteRemoveHandler = (film, index) => {
        let updatedFilms = films.allFilms;
        updatedFilms.push(film);
        setMovies({...films, allFilms: updatedFilms});

        let updatedFavs = films.favourited;
        updatedFavs.splice(index, 1);
        setMovies({...films, favourited: updatedFavs});
        setNotificationStatus({isActive: true, message: "removed from", film: film.title});

        localStorage.setItem("films", JSON.stringify(films));
    }

    const closeNotificationHandler = () => {
        setNotificationStatus(false);
    }

    return(
        <div>
            <div>
                <SearchBar/>
            </div>
            <div>
                <FilmList 
                    films={films}
                    addFav={favouriteAddHandler}
                    removeFav={favouriteRemoveHandler}
                />
            </div>
            <div>
                {notificationStatus ? 
                    <Notification 
                    display={notificationStatus.isActive}
                    message={notificationStatus.message}
                    film={notificationStatus.film}
                    toggleNotification={closeNotificationHandler}/> :
                null
                }
            </div>
        </div>
    );
}

export default App;