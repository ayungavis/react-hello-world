import React from "react";
import logo from "./logo.svg";
import "./App.css";

// import component from another file
import HomePage from "./pages/HomePage";

// private component, can't used in another component
function Navbar() {
  return <div>Navbar</div>;
}

// main component
function App() {
  const HelloWorld = "Hello, World!"; // constanta variable, cannot change
  let counter = 1; // dynamic variable, but I recommend useState

  // arrow funciton, recommended for event handler like onClick, onChange, etc.
  const renderHelloWorld = () => {
    return <div>{HelloWorld}</div>;
  };

  // normal function, recommended for render content and fetch data
  function renderCounter() {
    return <div>{counter}</div>;
  }

  // each component must return HTML
  return (
    <div>
      <div className="App">
        <Navbar></Navbar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{renderHelloWorld()}</p>
          <p>{renderCounter()}</p>
          <HomePage title="Home page" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div></div>
    </div>
  );
}

export default App;
