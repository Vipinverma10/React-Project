import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from './components/Body';
import { useState } from "react";

//not using keys(not accebtable) <<<<<<<< index as key <<<<<<< unique id (best practice)

const AppLayout =()=>{
    return(
        <div className="app">

            <Header/>
            <Body/>

        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)