"use strict";

console.log("App is running");

// JSX - JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indesition App"
    ),
    React.createElement(
        "p",
        null,
        "This is an info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        ),
        React.createElement(
            "li",
            null,
            "Item three"
        ),
        React.createElement(
            "li",
            null,
            "Item four"
        )
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
