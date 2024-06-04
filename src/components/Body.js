import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body =()=>{
    // local state variable 
    const[listOfRestaurants, setListOfRestaurant] = useState([]);
    const[filteredRestaurant, setFilteredRestaurant] =useState({});

    const[searchText, setSearchText] = useState([]);
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json(); 
        console.log(json);
        //Optional chaining        
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestaurants.length == 0 ?(
    //conditional rendering 
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="search" >
                <input type="text" className="search-box" value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button onClick={()=>{
                    console.log(searchText);

                    const filteredRestaurant = listOfRestaurants.filter(
                        (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                    setFilteredRestaurant(filteredRestaurant);
                }}
                >
                    Search
                </button>
                <button className="filter-btn" onClick={()=> {
                    //filter logic            
                      const filteredList = listOfRestaurants.filter(
                        (res)=>res.info.avgRating > 4.5
                      );
                      setListOfRestaurant(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div  className="res-container"> 
                {filteredRestaurant.map((restaurant)  => (
                    <Link key={restaurant.info.id} 
                    to={"/restaurants/" + restaurant.info.id}>
                        <RestaurantCard resData ={restaurant} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;