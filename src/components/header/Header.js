import React from "react";
import { Link, BrowserRouter as Router,} from 'react-router-dom'
import { useState } from "react";
import "../../Styles/style.css";
import PropTypes from "prop-types";
import Logo from '../../images/bio aid/bioaidbadge.svg'

function Header(props) {

  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <header className="header-tag" data-testid="header-tag">
        <div className="navbar">
          <div className="header-logo" data-testid="logo-nav">
            <img src={Logo} alt="Bio Aid" className='logo' />
          </div>
          <button className="nav-btn" onClick={showMenu}>
            {menu ? ' Close ' : ' Menu '}
          </button>
        </div>
        <nav className={menu ? "header-nav" : "hide"} data-testid="header-nav" id="navbar-nav">
          <ul className="nav-list" data-testid="nav-list">
            {/* <Router> */}

            <Link to='/' className='link-tag'>
              <li className="nav-link" data-testid="nav-link">
                Home
              </li>
            </Link>
            <Link to='/account' className='link-tag'>
              <li className="nav-link" data-testid="nav-link">
                Account
              </li>
            </Link>
            <Link to='/certificate' className='link-tag'>
              <li className="nav-link" data-testid="nav-link">
                Certificate
              </li>
            </Link>
            <Link to='/allQuestions' className='link-tag'>
              <li className="nav-link" data-testid="nav-link">
                Start Exam
              </li>
            </Link>
            {/* </Router> */}
          </ul>
        </nav>
      </header>
      <hr />
    </div>
  );
}

Header.propTypes = {
  logo: PropTypes.string,
  number: PropTypes.number,
};

export default Header;
