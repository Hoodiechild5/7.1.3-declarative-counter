import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [ fubar, setFubar ] = useState({
    myState: 'foo',
    otherState: 'baz'
  });
  window.setMyCounter = setFubar;

  return (
    <div className="App">
     
      <h1>{ fubar.myState }</h1>
      <h4>{ fubar.otherState }</h4>
    </div>
  );
}

export default App;
