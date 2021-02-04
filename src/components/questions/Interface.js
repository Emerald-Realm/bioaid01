// import react
import React from "react";

// import state
import { useState } from "react";

import { Link } from "react-router-dom";

// intiate component
function Interface(props) {

  // destructuring props
  const { question, option, student, show } = props;

  // intating confirm state
  const [confirm, setConfirm] = useState(false);

  // initiating choice as an array
  const [choice, setChoice] = useState([]);

  // on change and selection of option
  const handleChange = (e) => {

    // spread previous choice array and new choice
    setChoice([...choice, e.target.value]);

  };

  // on submit by clicking next btn
  const handleNext = (e) => {

    // prevent reload
    e.preventDefault();

    // student is updated with choice to parent component = AllQuestions.js
    student(choice);

    // manipulating confirm state
    setConfirm(!confirm);

  };

  //   to handle yes option
  const handleYes = () => {

    setConfirm(false);
    // show submit
    
    show(true);

  };

  //   to handle no option
  const handleNo = () => {
    
    setConfirm(false);

    // update show submit in parent component
    show(false);

  };

  return (
    // jsx beginning
    
    <div>
      <div className="instruction">
        <p className="inst">Instruction</p>
        <p>
         1: Signin / sign up before taking the exam to recieve your certificate.
        </p>
        <p>
          2: Ensure to <b>Confirm Submit</b> at the end of the page .
        </p>
      </div>

      {/* map question props with values ques and index */}
      {question.map((ques, index) => (
        // form is initiated
        
        <form key={question.indexOf(ques)}>
          <hr />
          {/* <form key={question.indexOf(ques)} onSubmit={handleNext}> */}
          
          {/* render ques */}
          <div className="question">
            {index + 1}. {ques}
          </div>
          <hr />

          {/* render option by index */}
          {option[index].map((item) => (

            // map option
            <div key={option[index].indexOf(item)}>
              {/* initiate label */}

              <label className="option">
                {/* initate input */}

                <input
                  // input type
                  type="radio"
                  // input value
                  value={item}
                  // set name to index
                  name={index}
                  // handle change event
                  onChange={handleChange}
                />
                {/* input item */}

                <p>{item}</p>
              </label>
            </div>
          ))}

          {/* submit initiatior */}
        </form>
      ))}
      <div className='move-btns'>

      {/* submit btn */}
      <button onClick={handleNext} className="link">Submit</button>

      {/* to Quit Exam */}
      <Link to='/' className='link-two'>Quit Exam</Link>
      </div>

      {/* Modal to confirm submit */}
      <div className={confirm ? "pass" : "hide"} id="modal">
        <div className="modal-content">
          are you sure you want to submit
          <div className="btn move-btns">
            <button className='link-two' onClick={handleNo}>no</button>
            <button className='link' onClick={handleYes}>yes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default
export default Interface;
