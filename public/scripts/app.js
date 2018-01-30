console.log('App.js is running!');

//JSX (JavaScript Syntax Extension) - JavaScript XML
//var template = <p>This is JSX from app.js!</p>;

var template = React.createElement(
    "h1",
    { id: "someid" },
    "Something new"
  );
  var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);