'use strict';

console.log("App is running");

// Exercicio 3
// only render the subtitle (and p tag) if subtitle exists - Logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

// Exercicio 2
// if statements
// ternary operators
// logical and operator

// Exercicio 1
// create app object title/subtitle
// use title/subtitle in the template
// render template

var info = {
    title: 'This is a title',
    subtitle: 'This is a subtitle'
};

var title = info.title;
var subtitle = info.subtitle;

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'h2',
        null,
        subtitle
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
