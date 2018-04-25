import React from 'react';
import logo from "../assets/logo-barnanto.png";

const Hero = props => (
<section class="hero is-dark is-medium">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src={logo} alt="My Landing Page" style={{height: 50}} />
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Documentation
            </a>
            <span class="navbar-item">
              <a class="button is-info is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        Title
      </p>
      <p class="subtitle">
        Subtitle
      </p>
    </div>
  </div>

  <div class="hero-foot">
    <nav class="is-fullwidth is-text-centered">
      <div class="container">
      <p>Countdown code is using code created by
      <a href="https://www.youtube.com/channel/UCUDLFXXKG6zSA1d746rbzLQ"> Alex from Code Realm</a>, using
      <a href="https://reactjs.org/"> React UI </a>and<a href="https://bulma.io/"> Bulma CSS</a>
      </p>
      <p>All Rights Reserved</p>
      <p>Eko Andri Subarnanto © 2018</p>
      </div>
    </nav>
  </div>
</section>
);

export default Hero;