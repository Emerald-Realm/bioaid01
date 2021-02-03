import { faItalic } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Certificate from './Certificate'

describe('Certificate Compnent', () => {

  

    it('should render Component', () => {
        render(
            <Router>
                <Certificate />
            </Router>
        )
    })

    it('render with localstorage get and certified is true prop', () => {

        localStorage.setItem('User', JSON.stringify(
            { firstName: "John", lastName: "Doe", age: 40, email: "example@example.com" }
            ))
            
        render(
            <Router>
                <Certificate certified={true}/>
            </Router>
        )
        // render congrats
        screen.getByText('Congratulations')
        // render given by
        screen.getByText(/given by/i)
        // render name from localstorage
        screen.getByText(/john/i)
        // render medal
        screen.getByAltText(/medal/)
    })

    it('render with certified is false prop and without localstorage get', () => {
        render(
            <Router>
            <Certificate certified={false}/>
        </Router>
        )
        
        // to see instruction
        screen.getByText(/to see/i)
        // render start exam link
        screen.getByRole('link', { name : /exam/i})
    })
})