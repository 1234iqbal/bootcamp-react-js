import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./page/home";
import About from "./page/about";
import Add from "./page/add";
function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/add" component={Add} />
      </div>
    </Router>
  );
}

export default App;
