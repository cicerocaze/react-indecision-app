'use strict';

console.log("App is running");

// create app object title/subtitle
// use title/subtitle in the template
// render template

var info = {
    title: 'This is a title, H1 element',
    subtitle: 'This is a subtitle, H2 element'
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

var userName = user.name;
var userAge = user.age;
var userLocation = user.location;
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        userAge
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        userLocation
    )
);

var appRoot = document.getElementById('app');
var componente2 = document.getElementById('c2');
ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, componente2);
