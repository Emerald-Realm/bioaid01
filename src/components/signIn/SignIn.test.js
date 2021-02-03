import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import SignIn from './SignIn'

describe('Sign in component', () => {

    it('should render component', () => {
        render(
            <Router>
                <SignIn />
            </Router>
        )    
    })

    it('should render units', () => {
        render(
            <Router>
                <SignIn />
            </Router>
        )    

        // render logo
        screen.getByAltText(/img/i)
        // render label
        screen.getByLabelText(/name/i)
        // render input
        screen.getByPlaceholderText('username')
        // render sign in btn
        screen.getByRole('button', { name : /sign in/i})
        // render new account link
        screen.getByRole('link', { name : /new account/i})
        // render other text
        screen.getByText(/other/i)
        // render google btn
        screen.getByRole('button', { name : /google/i})
    })
})