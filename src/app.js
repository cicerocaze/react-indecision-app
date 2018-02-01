console.log("App is running");

// JSX - JavaScript XML
let template = (
    <div>
        <h1>Indesition App</h1>
        <p>This is an info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
            <li>Item four</li>
        </ol>
    </div>
);

let appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);