import React from "react";
//kalau image atau font tidak diimport seperti ini, gambar tidak akan muncul
//cek readme di create-react-app
import logo from '../assets/logo-barnanto.png';

// is-primary
// is-link
// is-info
// is-success
// is-warning
// is-danger
// is-black
// is-dark
// is-light
// is-white

const Menu = props => (
  <nav className="navbar is-light">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://techandmedia.github.io/">
        {/* <img src="../assets/bulma-logo.png" alt="My Landing Page" height="28"/> */}
        <img src={logo} alt="My Landing Page" />
      </a>
      <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
      </div>
    </div>
    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="https://techandmedia.github.io/">Home</a>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link" href="#">Projects</a>
          <div className="navbar-dropdown is-boxed">
            <a className="navbar-item" href="#">Overview</a>
            <a className="navbar-item" href="#">Modifiers</a>
            <a className="navbar-item" href="#">Columns</a>
            <a className="navbar-item" href="#">Layout</a>
            <a className="navbar-item" href="#">Form</a>
            <hr className="navbar-divider" />
            <a className="navbar-item" href="#">Elements</a>
            <a className="navbar-item is-active" href="#">Components</a>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <a
                className="bd-tw-button button"
                data-social-network="Twitter"
                data-social-action="tweet"
                data-social-target="http://localhost:4000"
                target="_blank" rel="noopener noreferrer"
                href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                <span className="icon"><i className="fab fa-twitter" /></span>
                <span>Tweet</span>
              </a>
            </p>
            <p className="control">
              <a
                className="button is-primary"
                href="https://github.com/jgthms/bulma/releases/download/0.7.0/bulma-0.7.0.zip"
              >
                <span className="icon">
                  <i className="fas fa-download" />
                </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

export default Menu;
