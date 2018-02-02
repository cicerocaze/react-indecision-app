console.log("App is running");

// create app object title/subtitle
// use title/subtitle in the template
// render template

let info = {
    title: 'This is a title, H1 element',
    subtitle: 'This is a subtitle, H2 element'
}

let title = info.title;
let subtitle = info.subtitle;

// JSX - JavaScript XML
let template = (
    <div>
        <h1>{title}</h1>
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

let userName = user.name;
let userAge = user.age;
let userLocation = user.location;
let templateTwo = (
    <div>
        <h1>{userName}</h1>
        <p>Age: {userAge}</p>
        <p>Location: {userLocation}</p>
    </div>
);

let appRoot = document.getElementById('app');
let componente2 = document.getElementById('c2');
ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, componente2);