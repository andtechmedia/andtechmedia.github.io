import React from "react";
import logo from "../assets/logo-barnanto.png";

const Level = props => (
  <nav className="level" style={{marginTop: 0, marginBottom:0, padding: 10}}>
    <p className="level-item has-text-centered">
      <a className="has-text-dark" href="https://techandmedia.github.io/">Home</a>
    </p>
    <p className="level-item has-text-centered">
      <a className="has-text-dark">Project</a>
    </p>
    <p className="level-item has-text-centered">
      <img src={logo} alt="My Landing Page" style={{height: 50}} />
      {/* <img src="https://bulma.io/images/bulma-type.png" alt="" style="height: 30px;"/> */}
    </p>
    <p className="level-item has-text-centered">
      <a className="has-text-dark">About</a>
    </p>
    <p className="level-item has-text-centered">
      <a className="has-text-dark">Contact</a>
    </p>
  </nav>
);

export default Level;
