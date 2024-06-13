import UserClass from "./UserClass";

const About=()=>{
    return(
        <div className="about">
            <h1>About</h1>
            <h2>This is my Food app about page</h2>
            <UserClass name = {"Vipin (class)"} location={"Mumbai"}/> 
        </div>
    );
};

export default About;