/*
<div id = "parents">
    <div id = "child">
        <h1>I'm h1 tag</h1>
        <h2>h2 tag </h2>
    </div>
    <div id = "child2">
        <h1>I'm h1 tag</h1>
        <h2>h2 tag </h2>
    </div>
    <div id = "child3">  
        <h1>I'm h1 tag</h1>
        <h2>h2 tag </h2>
    </div>
</div>

ReactElement(object)=> HTML(Browser Understands)
*/

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I'm h1 tag"),
        React.createElement("h2",{},"I'm h2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I'm h1 tag"),
        React.createElement("h2",{},"I'm h2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I'm h1 tag"),
        React.createElement("h2",{},"I'm h2 tag")
    ]),
]);


 
 
// // create element is a core thing of react
// const heading = React.createElement(
//     "h1",
//     {id:"heading", xyz:"abc"}, 
//     "From app.js file 'Hello'");

// console.log(heading); //object
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root")) // creating a root is thing of React-DOM

root.render(parent);
