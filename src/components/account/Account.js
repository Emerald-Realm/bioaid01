import React from "react";
import "../../Styles/style.css";
import Big from "../../images/bioaidlogo.svg";
import { Link } from "react-router-dom";

// const user = JSON.parse(localStorage.getItem("User"));

function Account() {
  const user = JSON.parse(localStorage.getItem("User"));

  if (user) {
    return (
      <div className="acct-store">
        <img src={Big} className="logo-img" alt="big logo" />
        <div className="acct-context">
          <div className="accnt">
            <div className="title">
              <p>Name</p>
              <p>Age</p>
              <p>Email</p>
              <p>Status</p>
            </div>
            <div className="user-ans">
              <p>{`${user.firstName} ${user.lastName}`}</p>
              <p> {user.age}</p>
              <p> {user.email}</p>
              <p>waiting</p>
            </div>
          </div>
          <Link to="/certificate" className="link-two certf">
            See Certificate
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="guest">
          <p className="guest-talk">Please sign in to see account details</p>
          {/* <Router> */}
            <Link to="/signin" className="link">
              Sign in
            </Link>
          {/* </Router> */}
        </div>
      </div>
    );
  }
}

export default Account;

