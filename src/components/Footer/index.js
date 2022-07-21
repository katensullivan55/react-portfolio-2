import React from 'react';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();


  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h3><strong>Kate.</strong></h3>
        <p>Made thoughtfully by <strong><a href="https://github.com/pravton" target="_blank" rel="noreferrer">Kate</a></strong></p>
        <p>© {year} All Rights Reserved</p> 
      </div>
    </footer>
  )
}

export default Footer;