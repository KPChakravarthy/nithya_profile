import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return <p className="center-align footer-bar">
    &copy; {year}; Crafted with ❤️️ by Nithya Aathreya.
  </p>
}

export default Footer;
