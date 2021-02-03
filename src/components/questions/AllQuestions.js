import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Interface from "./Interface";
import Options from "./Options";

function AllQuestions(props) {
  
  // questions in object
  const Questions = {
    one: "How long should you check for breathing while performing CPR ?",
    two:
      "When you try to give an unresponsive adult a rescue breath and the chest does not appear to rise, what would you do next ?",
    three: `After finding an unresponsive child, yelling for help, and confirming the child isn't breathing what would be your next course of action ?`,
    four: ` After finding someone who is unresponsive, has a pulse but does not appear to be breathing, you find you are unable to give them CPR, what do you do next ?`,
    five: ` Arriving first to the scene, you find an unresponsive person with no pulse that has thrown up. You feel CPR is not something you are comfortable giving them. What would be the next best thing for you to do ?`,
    six: `You come upon a person who has lost a significant amount of blood, has a very pale skin color, and is confused. What do you suspect the cause to be ?`,
    seven: ` Due to the essential nature of washing your hands, how much time is recommended to wash your hands ?`,
    eight: `While dining out in a restaurant you hear a mother cry out that her six-month-old child, who was given some marbles by an older child, is gagging. His mouth area is turning blue and he’s unable to take a breath or cry out. What would you do first in this scenario ?`,
    nine: ` Where should you place the AED pads when treating an infant for pediatric cardiac arrest ?`,
    ten: `While performing CPR on an infant, another rescuer appears on the scene, what do you do next ?`,
  };

  // correct answers in object
  const correctAns = {
    one: "No longer than 10 seconds",
    two: "Repeat the head tilt/chin lift maneuver and attempt the breath again",
    three: "Deliver 30 chest compressions",
    four:
      "Repeat the head tilt/chin lift maneuver and attempt the breath again",
    five: "Compression only CPR",
    six: "Shock",
    seven: "20 seconds",
    eight: "Deliver back blows and chest thrusts",
    nine: "Chest and back",
    ten: "Have the second rescuer help with CPR, to minimize fatigue",
  };


  // questions object converted to array
  const values = Object.values(Questions);

  // answers converted to array
  const crtAns = Object.values(correctAns);

  // initating student choice state
  const [studentChoice, setStudentChoice] = useState([]);

  // intiate score state
  const [score, setScore] = useState();

  // intiate show state
  const [show, setShow] = useState();
  
  // getting examinee's choice from child compnt
  const student = (choice) => {
    setStudentChoice(choice);
  };

  // to show confirm submit btn
  const showSubmit = (show) => {
    setShow(show)
  }

  // filter correct ans from choice
  const correctStudents = crtAns.filter((ans) =>
    // some element of stdt-coie which are equal to elemt of crt ans
    studentChoice.some((choice) => ans === choice)
  );

  // to handle confirm submit btn
  const handleResults = () => {

    // hide confirm submit btn
    setShow(false)

    // get number of correct answers
    const correctAnswers = correctStudents.length;

    // calculate Score percentage
    const score = (correctAnswers / 10) * 100;

    // updating score
    setScore(score);

    // parameter for passing
    if (score > 10) {
      alert(`You Passed the Exam at ${score}%`);
    } else {
      alert("You failed, try again later");
    }
  };

  const {passed} = props

  const handlePassed = () => {
    passed(true)
  }

  return (
    <div>

      {/* Rendering the Questions */}
      <Interface question={values} option={Options} student={student} show={showSubmit} />
      
      {/* The confirm submit btn to end the exam */}
      <button onClick={handleResults} className={show ? 'link' : 'hide'} >
        Confirm submit
      </button>

      {/* link to certificate page */}
      <Link to='/certificate' className={score > 10 ? "link-two" : "hide"} onClick={handlePassed}>
        see Certificate
      </Link>

      {/* link to home page */}
        <Link to='/' className={score < 10 ? "link-two" : "hide"}>
        go to Home
      </Link>

    </div>
  );
}

export default AllQuestions;
