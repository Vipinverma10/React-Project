# React Day 1

# Parcel
- Dev Build
- Local Server 
- HMR = Hot Module Replacement 
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization 
- Minification 
- Bundling 
- Compressing 
- Consistent Hashing
- Code Splitting 
- Diggerential Bundling - Support older browsers
- Diagnostic 
- Error Handling 
- HTTPs
- Tree Shacking - remove unused code 
- Different dev and prod bundles

//React.createElement => ReactElement- JS Object => HTMLElement (render)
/*
const heading = React.createElement(
    "h1",
    {id:"heading"},
    "React app"
);

console.log(heading);
*/
// JSX - HTML-like or XML-like syntax
// Jsx - (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => Babel transpiles it to  React.createElement => ReactElement- JS Object => HTMLElement(render)

// React Component 
// Class based components - old
// Functional based components - new

# Food Ordering app

/*

/ Header 
- logo 
- nav Items 

/ Body 
- search
- restaurant cards
-- image , name, rating, delivery time, 

/ Footer 
- copyright 
- links  
- information 

*/

Two types of Export/Import 
- Default Export/Important

export default component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";



# React Hooks 
(Normal JS utility functions)
- useState() - Superpowerful State Variables in react 
- useEffect()



# 2 types Routing in web apps
- Client Side Routing 
- Server Side Routing

# Functional Based Component/ Class Based Component
- Difference between both 
