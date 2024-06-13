import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 1,
        };
    }
 
    render(){
        const{name, location}= this.props;
        const{count, count2} = this.state;

        return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h1>Count : {count2}</h1>
            <button 
                onClick={() => {
                // NEVER UPDTAE STATE VARIABLE DIRECTLY
                // this.state.count = this.state.count+1;s
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 10,

                    });
                }}
            >
                Count Increase
            </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: vipinverma100118@gmail.com</h4>
    </div>
    ); 
}
}

export default UserClass;