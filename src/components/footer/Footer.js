import React from "react";
import { Link } from 'react-router-dom'
import "../../Styles/style.css";

function Footer() {
  return (
    <div className="foot-container">
      <hr />
      <footer className="foot-tag">
        <p className="bio">Bio </p>
        <p className="aid">Aid </p>
        &copy; 2021
      </footer>
      {/* <Router> */}

      <Link to='/disclaimer' className='link-two'>
        Click here to see disclaimer
      </Link>
      {/* </Router> */}
    </div>
  );
}

export default Footer;
