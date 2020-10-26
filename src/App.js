import React from "react";
import Counter from "./components/Counter"
import CounterGroup from "./components/CounterGroup"
import "./App.css";
import CounterGroup from "./components/CounterGroup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter />
       <CounterGroup />
      </header>
    </div>
  );
}

export default App;
