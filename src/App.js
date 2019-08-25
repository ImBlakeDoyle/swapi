import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";

import Notification from "./components/Notification";
import FilmList from "./components/FilmList";
import SearchBar from "./components/Searchbar";

function App (){

    const [films, setMovies] = useState({
        allFilms: []
    });

    const [notificationStatus, setNotificationStatus] = useState({
        isActive: false,
        message: "",
        film: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            console.log("fetching");
            const response = await axios.get("https://swapi.co/api/films/")
            
            const updated = response.data.results.map((film) => {
                return {...film, favourite: false};
            });

            setMovies({...films, allFilms: updated});
            localStorage.setItem("films", JSON.stringify(films));
        };
        const data = localStorage.getItem("films");
        if (data){
            setMovies(JSON.parse(data));
        } else {
        fetchData();
        }
    }, []);

    const favouriteAddHandler = (film, index) => {
        let updatedFilm = film;
        let newAllFilms = films.allFilms

        newAllFilms.splice(index, 1);

        updatedFilm.favourite = true;
        newAllFilms.unshift(updatedFilm);
        
        setMovies({...films, allFilms: newAllFilms});
        setNotificationStatus({isActive: true, message: "added to", film: film.title});
        localStorage.setItem("films", JSON.stringify(films));
    }

    const favouriteRemoveHandler = (film, index) => {
        let updatedFilm = film;
        let newAllFilms = films.allFilms

        newAllFilms.splice(index, 1);

        updatedFilm.favourite = false;
        newAllFilms.push(updatedFilm);
        
        setMovies({...films, allFilms: newAllFilms});
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