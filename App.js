// const heading = React.createElement("h3",{id:"heading"},"hello my react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
import React from "react";
import ReactDOM from 'react-dom/client'
const parent  = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},[
        React.createElement(
        "h1",
         {},
         "I am in h1 tag"),
         React.createElement(
            "h2",
         {},
         "i am h2 tag"),
        ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);