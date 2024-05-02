import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body =()=>{

    const[listOfRestaurants, setListOfRestaurant] = useState(resList);

    // const listOfRestaurants = [{
    //       "id": "736007",
    //       "name": "Punjabi Rasoi",
    //       "cloudinaryImageId": "d9b5570d65d8600f10d985a817e0f0ff",
    //       "costForTwo": "₹250 for two",
    //       "cuisines": ["Pizzas","Beverages"],
    //       "avgRating": "3.9",
    //       "deliveryTime": 25,
    //     },
        // {
        //    "id": "692144",
        //     "name": "BOOM Sandwich - Sub of India",
        //     "cloudinaryImageId": "96aaf72372ad1b0297b7cc304ced7e33",
        //     "costForTwo": "₹250 for two",
        //     "cuisines": ["Snacks","Indian","Desserts"],
        //     "avgRating": 4.5,
        //     "deliveryTime": 23,
        // },
// ];

    return (
        <div className="body">
            <div className="search" >
                <button className="filter-btn" onClick={()=> {
                    //filter logic            
                      const filteredList = listOfRestaurants.filter(
                        (res)=>res.info.avgRating>4
                      );
                      setListOfRestaurant(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div  className="res-container"> 
                {listOfRestaurants.map((restaurant)  => (
                    <RestaurantCard key = {restaurant.info.id} resData ={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;