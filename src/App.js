import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";

import Notification from "./IndexComponents/Notification";
import FilmList from "./IndexComponents/FilmList";

function App (){

    const [films, setFilms] = useState({
        allFilms: []
    });

    const [notificationStatus, setNotificationStatus] = useState({
        isActive: false,
        message: "",
        film: ""
    });

    //Fetch film data from api if not previously saved in localstorage
    useEffect(() => {
        const fetchData = async () => {
            console.log("fetching");
            const response = await axios.get("https://swapi.co/api/films/")
            
            const updated = response.data.results.map((film) => {
                return {...film, favourite: false};
            });

            setFilms({...films, allFilms: updated});
        };
        const data = localStorage.getItem("films");
        if (data){
            setFilms(JSON.parse(data));
        } else {
        fetchData();
        }
    }, []);

    //Handler to add film as a favourite
    const favouriteAddHandler = (film, index) => {
        let updatedFilm = film;
        let newAllFilms = films.allFilms

        newAllFilms.splice(index, 1);

        updatedFilm.favourite = true;
        newAllFilms.unshift(updatedFilm);
        
        setFilms({...films, allFilms: newAllFilms});
        setNotificationStatus({isActive: true, message: "added to", film: film.title});
        localStorage.setItem("films", JSON.stringify(films));
    }

    //Handler to remove film as a favourite
    const favouriteRemoveHandler = (film, index) => {
        let updatedFilm = film;
        let newAllFilms = films.allFilms

        newAllFilms.splice(index, 1);

        updatedFilm.favourite = false;
        newAllFilms.push(updatedFilm);
        
        setFilms({...films, allFilms: newAllFilms});
        setNotificationStatus({isActive: true, message: "removed from", film: film.title});
        localStorage.setItem("films", JSON.stringify(films));
    }

    //Handler to close the notification message when a film is favourite/unfavourited
    const closeNotificationHandler = () => {
        setNotificationStatus(false);
    }

    return(
        <div className="container">
            <h1 className="title">SWAPI</h1>
            <hr/>
            {films.allFilms.length === 0 ?
                <div>Loading...</div> :
                <div className="film-list-center">
                    <FilmList 
                        films={films}
                        addFav={favouriteAddHandler}
                        removeFav={favouriteRemoveHandler}
                    />
                </div>
            }
            <div className="film-list-center">
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