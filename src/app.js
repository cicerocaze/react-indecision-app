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

let info = {
    title: 'This is a title',
    subtitle: 'This is a subtitle'
}

let title = info.title;
let subtitle = info.subtitle;

// JSX - JavaScript XML
let template = (
    <div>
        <h1>{title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <h2>{subtitle}</h2>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
            <li>Item four</li>
        </ol>
    </div>
);

// Create a templateTwo var JSX expression
// div
//  h1 -> Andrew Mead
//  p -> Age: 26
//  p -> Location: Philadelphia
//Render templateTwo instead of template

let user = {
    name: 'Cícero Cazé Rabelo',
    age: 26,
    location: 'Philadelphia'
}
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }else{
        return 'Unknown';
    }
}

let userName = user.name;
let userAge = user.age;
let userLocation = user.location;
let templateTwo = (
    <div>
        <h1>{userName ? userName: 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {userAge}</p>}
        <p>Location: {getLocation(user.location)}</p>
    </div>
);

let appRoot = document.getElementById('app');
let componente2 = document.getElementById('c2');
ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, componente2);