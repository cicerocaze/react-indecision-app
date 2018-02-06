'use strict';

console.log("App is running");

// Exercicio 1
// create app object title/subtitle
// use title/subtitle in the template
// render template

// Exercicio 2
// if statements
// ternary operators
// logical and operator

// Exercicio 3
// only render the subtitle (and p tag) if subtitle exists - Logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

var title = app.title;
var subtitle = app.subtitle;
var options = app.options;

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        title
    ),
    subtitle && React.createElement(
        'p',
        null,
        subtitle
    ),
    React.createElement(
        'p',
        null,
        options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        ),
        React.createElement(
            'li',
            null,
            'Item three'
        ),
        React.createElement(
            'li',
            null,
            'Item four'
        )
    )
);

// Create a templateTwo var JSX expression
// div
//  h1 -> Andrew Mead
//  p -> Age: 26
//  p -> Location: Philadelphia
//Render templateTwo instead of template

var user = {
    name: 'Cícero Cazé Rabelo',
    age: 26,
    location: 'Philadelphia'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    } else {
        return 'Unknown';
    }
}

var userName = user.name;
var userAge = user.age;
var userLocation = user.location;
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName ? userName : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        userAge
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    )
);

var appRoot = document.getElementById('app');
var componente2 = document.getElementById('c2');
ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, componente2);
