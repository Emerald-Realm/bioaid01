import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import AllQuestions from './AllQuestions'

describe('All questions component', () => {

    it('should render component', () => {
        render(
            <Router>
                <AllQuestions />
            </Router>
        )
    })

    it('should render the units', () => {
        render(
            <Router>
                <AllQuestions />
            </Router>
        )

        // render instuction
        screen.getByText(/instruction/i)
        // render question(s)
        screen.findAllByText('breath')
        // render options
        screen.getAllByRole('radio', { name: /10 seconds/i })
        // fire change / checked event
        fireEvent.change(  screen.getByRole('radio', { name : /blind finger/i} ) )
        // render submit btn
        screen.getByRole('button', { name : /submit/})
        // render quit exam link
        screen.getByRole ('link', { name : /quit/i})
        // fire submit
        fireEvent.submit( screen.getByRole ('button', { name : /submit/}))
        // render sure question
        screen.getByText(/you want to/)
        // render no btn
        screen.getByRole ('button', { name : 'no'})
        // render yes btn
        screen.getByRole ('button', { name : 'yes'})
        // fire event btn in modal
        if(
            // fire no btn
            fireEvent.click(
                screen.getByRole ('button', { name : 'no'})
            )
        ) {
            // rnder submit btn
        fireEvent.submit( screen.getByRole ('button', { name : /submit/}))
        } else if (
            // fire no btn
            fireEvent.click(
                screen.getByRole ('button', { name : 'no'})
            )
        ) {
            // render confirm btn
            screen.getByRole( 'button', { name : /confirm submit/i} )

        }
        // render home link
        screen.getByRole ('link', { name : /home/i})
        // render certificate link
        screen.getByRole ('link', { name : /certificate/i})
    })

})