import React from "react";
import "./App.css";

//basic files
import Header from "./Components/Basic Files/Header";

//components
import List from "./Components/List";

// main functions
function App() {
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
