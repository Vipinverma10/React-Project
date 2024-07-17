import UserClass from "./UserClass";
// import { Component } from "react"; 
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);

        // console.log("Parent Constructor");
    }

    render(){
        // console.log("Parent Render");
        return(
            <div className="about">
                <h1>About</h1>
                <h2>This is my Food app about page</h2>
                <UserClass name = {"First"} location={"Mumbai Class"}/>
            </div>
        );
    } 
};  

export default About;