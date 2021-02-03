import React from 'react'
import Account from './Account'
import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router, Link } from "react-router-dom";


describe('account component', () => {

  beforeEach(() => localStorage.clear());

  it('should render component', () => {
    render(
      <Router>
        <Account />
      </Router>)
  })

  it('should get user from localstorage', () => {
    expect(localStorage.getItem).toHaveBeenCalledWith('User')
  })

  it('should render units with user', () => {
    localStorage.setItem('User', JSON.stringify(
      { firstName: "John", lastName: "Doe", age: 40, email: "example@example.com" }
      ))
    render(
      <Router>
        <Account />
      </Router>)
    // render logo
    screen.getByAltText('big logo')
    // render name question
    screen.getByText(/name/i)
    // render name value
    screen.getByText(/john/i)
    // render certificate link 
    screen.getByRole('link', { name: /certificate/i})
  })

  it('should render without user', () => {
    render(
      <Router>
        <Account />
      </Router>)

      // render sign in link
      screen.getByRole('link', { name : "Sign in" } )
  })

})