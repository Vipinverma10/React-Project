import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name: "Dummy",
                location: "Default",
            }, 
        };

        // console.log(this.props.name+ "Child Constructor");
    }

    async componentDidMount(){
        // console.log("Parent Component Did Mount");
        // API CALL

        const data = await fetch("https://api.github.com/users/Vipinverma10");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }
 
    render(){
        const{name, location}= this.props;

        // console.log(this.props.name+ "Child Render");

        return (
        <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: vipinverma100118@gmail.com</h4>
    </div>
    ); 
}
}

export default UserClass;


/***
 *  --Mounting --
 * 
 * Constructor (dummy)
 * Render (dummy)
 * <HTML Dummy>
 * Component Did Mount
 *      <API Call>
 * <this.setState -> State variable is updated
 * 
 * ----UPDATE
 * 
 * render(API Data)
 * <HTML (new API data)
 * component Did Update
 * 
 */