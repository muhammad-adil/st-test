import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Articles from "./pages/Articles";

function App() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <Navbar />
          <div className="page-content">
            <Header />

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/reports" component={Reports} />
              <Route path="/articles" component={Articles} />
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
