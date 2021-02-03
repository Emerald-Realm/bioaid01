import React from "react";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from "formik";
import Big from '../../images/bioaidlogo.svg'

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.age) {
    errors.age = "Required";
  } else if (values.age > 100) {
    errors.age = "Must be 100 years old or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // console.log(values.age);
  return errors;
};

const Signup = () => {

    const [status, setStatus] = useState(false)

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: 0,
      email: "",
    },
    validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(values);
      localStorage.setItem("User", JSON.stringify(values));
      setStatus(true)
    },
  });
  return (
    <div className="sign-up">
      <img src={Big} className="logo-img" alt="logo" />
      <form onSubmit={formik.handleSubmit} className="signup-form">
        <label className="form-label" htmlFor="firstName">
          First Name
        </label>
        <input
          className="form-input"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="required">{formik.errors.firstName}</div>
        ) : null}

        <label className="form-label" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="form-input"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="required">{formik.errors.lastName}</div>
        ) : null}

        <label className="form-label" htmlFor="age">
          Age
        </label>
        <input
          className="form-input"
          id="age"
          name="age"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age ? (
          <div className="required">{formik.errors.age}</div>
        ) : null}

        <label className="form-label" htmlFor="email">
          Email Address
        </label>
        <input
          className="form-input"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="required">{formik.errors.email}</div>
        ) : null}

        <div className="btns">
          <button type="" className="link-two">
          <Link to="/signin" className="link-two">
            back
          </Link>
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
        <Link to="/account" className={status ? 'next-link' : 'hide'}>
            Next
        </Link>
      </form>
    </div>
  );
};

export default Signup;
