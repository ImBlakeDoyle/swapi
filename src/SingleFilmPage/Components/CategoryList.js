import React, { useState, useEffect } from "react";
import axios from "axios";

import SingleCategoryItem from "./SingleCategoryItem";


function CategoryList(props) {

    const { category, type } = props;
    const [allItems, setItems] = useState([{}]);
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
        };
        if (loading) {
        fetchData();
        }
        else {
            return;
        }
    }, [allItems]);

    //Pass the fetched data to the single item view
    return(
        <div>
            { !loading ? 
                allItems.map((item, index) => {
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