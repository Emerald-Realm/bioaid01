import React from 'react'
import { render, screen, fireEvent, waitForDomChange } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Signup from './SignUp'

describe('Sign up component', () => {
    it('should render component', () => {
        render(
            <Router>
                <Signup />
            </Router>
        )
    })

    it('should render units', async () => {
        render(
            <Router>
                <Signup />
            </Router>
        )
        // render logo
        screen.getByAltText(/logo/i)
        // render label first name
        screen.getByLabelText(/first/i)
        // screen.getByLabelText(/firstname/i)
        // render back link
        screen.getByRole('link', { name: /back/i })
        // render submit btn 
        screen.getByRole('button', { name: /submit/i })
        // fire event click / submit
        fireEvent.click(screen.getByRole('button', { name: /submit/i }))
        // wait for state update from event
        await waitForDomChange(
            () => {
                // render next link
                screen.getByRole('link', { name: /next/i })
            }
        )
    })
})