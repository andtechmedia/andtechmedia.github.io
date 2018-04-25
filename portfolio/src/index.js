import React from "react";
import ReactDOM from "react-dom";
// import App from './components/App';
// import Hero from './components/Hero';
// import Menu from "./components/Menu";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Level from './components/Level';
// import bg from './assets/board-close-up-coffee-905868.jpg';
import "bulma/css/bulma.css";
import './index.css';

ReactDOM.render(
  <div>
    {/* <Hero /> */}
    {/* <Menu /> */}
    <Level />
    <Countdown />
    <Footer />
    {/* <App /> */}
  </div>,
  document.getElementById("root")
);
