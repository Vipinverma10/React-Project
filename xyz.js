import React from "react";
import ReactDOM from "react-dom/client";

/**
* Header
* - Logo
* - Nav Items
* Body
* - Search 
- Restaurant Container 
- Restaurant Card 
    -Img
    - name of Res, Star rating, Cuisine, delivery time

* Footer 
- CopyRight
- links 
- address
- contact
*/

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnn4m1Ap6mClU9fZq6esWlK8E6vIvB5mKk2T9XCxzs4QhA5LeOXh3EVy_HrM1_lgXDTxY&usqp=CAU"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    )
};

const RestaurantCard =()=>{
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/80f040545552605e33eba09f8fa30be9" />
            <h3>Pizza Hut</h3>
            <h4>Pizza, Pasta, Burger</h4>
            <h4>4.0 Stars</h4>
            <h4>40 Minutes</h4>
        </div>
    );
};

const Body = ()=> {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/> 
            </div>
        </div>
    );
};

const AppLayout =()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


