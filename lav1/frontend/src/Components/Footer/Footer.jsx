import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png';
import instaIcon from '../Assets/instagram.png';
import fbIcon from '../Assets/WhatsApp.svg';
import twitterIcon from '../Assets/Pinterest-logo.png'; 

// import React from 'react';
// import './Footer.css'; // Import your CSS file
// import footerLogo from './path-to-your-logo.jpg'; // Import your logo
// import instaIcon from './path-to-instagram-icon.png'; // Import Instagram icon
// import fbIcon from './path-to-facebook-icon.png'; // Import Facebook icon
// import twitterIcon from './path-to-twitter-icon.png'; // Import Twitter icon
// import linkedinIcon from './path-to-linkedin-icon.png'; // Import LinkedIn icon

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={footer_logo} alt="Your Logo" />
        <p>"Connect Local" Where locals meet services</p>
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/content">Content</a></li>
            <li><a href="/create">Create</a></li>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/terms-and-services">Terms and Services</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Community</h4>
          <ul>
            <li><a href="/help-center">About Us</a></li>
            <li><a href="/suggestions">Suggestions</a></li>
            <li><a href="/blog">Sign in</a></li>
            <li><a href="/newsletters">Sign in</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Partner</h4>
          <ul>
            <li><a href="/our-partner">Our Service Providers</a></li>
            <li><a href="/become-partner">Become Service Provider</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Hoobank. All Rights Reserved.</p>
        <div className="footer-social-icons">
          <a href="https://instagram.com/yourpage"><img src={instaIcon} alt="Instagram" /></a>
          <a href="https://facebook.com/yourpage"><img src={fbIcon} alt="Facebook" /></a>
          <a href="https://twitter.com/yourpage"><img src={twitterIcon} alt="Twitter" /></a>
          {/* <a href="https://linkedin.com/yourpage"><img src={linkedinIcon} alt="LinkedIn" /></a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;