import React from "react";
import AboutSection from "./components/AboutSection";
//Global Style
import GlobalStyle from "./components/GlobalStyle";

// Import Pages
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import MyWork from "./pages/MyWork";
import Nav from "./components/Nav";
import WorkDetail from "./pages/WorkDetail";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
import ScrollTop from "../src/components/ScrollTop";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutMe />
          </Route>
          <Route path="/work" exact>
            <MyWork />
          </Route>
          <Route path="/work/:id">
            <WorkDetail />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
        </Switch>
        <ScrollTop />
      </AnimatePresence>
    </div>
  );
}

export default App;
