import React, { Component } from 'react';
// import Countdown from './Countdown';
// import Footer from './Footer';
// import Menu from './Menu';
// import Level from './Level';
import logo from "../assets/logo-barnanto.png";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Menu /> */}

        {/* <Level /> */}
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

        {/* <Countdown /> */}
        <section className="hero is-transparent is-medium">
          <div className="hero-body has-text-centered">
            <div className="container">
              <h1 className="title">Eko Andri Subarnanto</h1>
              <h2 className="subtitle">Lebaran is coming!</h2>
              <h2 className="subtitle">Bentar lagi Idul Fitri!</h2>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
        <footer className="footer">
          <div className="container ">
            <div className="content is-transparent has-text-centered" style={{margin:0, padding:0}}>
              <p>Countdown code is using code created by
              <a href="https://www.youtube.com/channel/UCUDLFXXKG6zSA1d746rbzLQ"> Alex from Code Realm</a>, using
              <a href="https://reactjs.org/"> React UI </a>and<a href="https://bulma.io/"> Bulma CSS</a>
              </p>
              <p>All Rights Reserved</p>
              <p>Eko Andri Subarnanto © 2018</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
