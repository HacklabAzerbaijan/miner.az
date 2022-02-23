import Home from "./page/Home";
import Blog from "./page/Blog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/app.css";
import "./css/custom.css";
import "./css/plugins.min.css";
import "./fonts/sfuidisplay.css";
import BlogAbout from "./page/BlogAbout";
import Price from "./page/Price";
import { useState } from "react";

function App() {
  const [navbarToggle, setNavbarToggle] = useState(false);

  return (
    <div
      className={navbarToggle===false ? "App theme-blue" :"theme-blue loaded offcanvas--open"}
      data-spy="scroll"
      data-target="#navbar-nav"
      data-animation="false"
      data-appearance="darkblue"
    >
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home
              navbarToggle={navbarToggle}
              setNavbarToggle={setNavbarToggle}
            />
          </Route>
          <Route path="/blog" component={Blog} />
          <Route path="/blogNews" component={BlogAbout} />
          <Route path="/price" component={Price} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
