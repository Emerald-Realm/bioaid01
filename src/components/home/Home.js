import React from "react";
import {
  Image
} from "cloudinary-react";
import { Link } from "react-router-dom";
import "../../Styles/style.css";

function Home() {
  return (
    <div>
      <div className="content">
        <div>
          <Image
            data-testid="logo"
            cloudName="fiendgod"
            publicId="Bio%20/bioaidlogo_bno9wk.svg"
            className="big-logo"
          ></Image>
        </div>
        <div className="context">
          <div className="motto">
            <p className="motto-one">Take Some Time.</p>
            <p className="motto-two">To Learn First Aid and CPR,</p>
            <p className="motto-three">It Saves Life And It Works</p>
          </div>
          {/* <Router> */}
            <Link to="/allQuestions" className="start-btn">
              Start Exam
            </Link>
          {/* </Router> */}
          <p className="pass">Pass Our Exam and Receive Your Certificate</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
