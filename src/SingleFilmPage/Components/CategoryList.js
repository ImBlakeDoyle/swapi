import React, { useState, useEffect } from "react";
import axios from "axios";

import SingleCategoryItem from "./SingleCategoryItem";


function CategoryList(props) {

    const { title, category, type } = props;
    const [allItems, setItems] = useState([]);
    const [cached, setCached] = useState([]);
    const [loading, setLoading] = useState(true);

    //Fetch the information regarding each category (people, vehicles, etc) and set in state
    useEffect(() => { 
        const fetchData = async () => {
            const newList = [];
            for (let i = 0; i < category.length; i++){
            const response = await axios.get(category[i]);
            newList.push(response.data);
            console.log("Item fetched!");
            }
            setLoading(false);
            setItems(newList);
            localStorage.setItem(`${title}${type}`, JSON.stringify(newList));
        };

        const data = localStorage.getItem(`${title}${type}`);
        if (!data){
            fetchData();
        } else{
            const parsed = JSON.parse(data);
            setCached(cached => ([...cached, parsed]));
            setLoading(false);
        }
    }, [allItems]);


    //Properly updates the cached state
    useEffect(() => {
        console.log(cached);
    }, [cached])


    //Render data from cached if it exists, otherwise render from allItems after get request
    //Render "loading..." if data is not cached or has not yet been fetched from api
    return(
        <div>
            { (!loading && cached.length === 0) ? 
                allItems.map((item, index) => {
                    return(
                        <span key={index}>
                            <SingleCategoryItem category={item} type={type}/>
                        </span>  
                    );
                }) :
                (!loading && cached.length >= 1) ?
                    cached[0].map((item, index) => {
                        return(
                            <span key={index}>
                                <SingleCategoryItem category={item} type={type}/>
                            </span>  
                        );
                    }) :
                <div>Loading {type}...</div>
            }
        </div>
    );
}

export default CategoryList;