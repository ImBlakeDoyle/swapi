import React, {useEffect, useState} from "react";
import axios from "axios";

import DisplayFilms from "./components/DisplayFilms";
import DisplayFavs from "./components/DisplayFavs";
import Notification from "./components/Notification";


function App (){

    const [favourited, setFavourited] = useState([]);
    const [allFilms, setFilms] = useState([]);
    const [notificationStatus, setNotificationStatus] = useState({
        isActive: false,
        message: "",
        film: ""
    });

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
        setNotificationStatus({isActive: true, message: "added to", film: film.title});
    }

    const favouriteRemoveHandler = (film, index) => {
        setFilms([...allFilms, film]);
        let updatedFavourites = favourited;
        updatedFavourites.splice(index, 1);
        setFavourited(updatedFavourites);
        setNotificationStatus({isActive: true, message: "removed from", film: film.title});
    }

    const toggleNotificationStatus = () => {
        setNotificationStatus(false);
    }

    // const displayNotification = (film, status) => {
    //     let message = `${film.title} has been ${status} favourites`;
    //     console.log(message);
    // }

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
                {(allFilms.length === 0 && favourited.length === 0) ? <div>Loading...</div> :
                    <DisplayFilms 
                    regFilms={allFilms} 
                    addToFav={favouriteAddHandler}/>
                }
            </div>
            <div>
                {notificationStatus ? 
                <Notification 
                display={notificationStatus.isActive}
                message={notificationStatus.message}
                film={notificationStatus.film}
                toggleNotification={toggleNotificationStatus} />
                :
                null
                }
            </div>
        </div>
    );
}

export default App;