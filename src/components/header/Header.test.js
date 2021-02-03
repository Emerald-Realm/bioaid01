import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import Header from './Header'
import { Link, BrowserRouter as Router, } from 'react-router-dom'


describe('header component', () => {


    it('should render the following', () => {
        const { getByText, getByTestId, getByRole } = render(
            <Router>
                <Header />
            </Router>
        )

        getByText('Home')
        getByText('Account')
        getByText('Certificate')
        getByText('Start Exam')

        fireEvent.click(screen.getByText('Menu'))
        getByText('Close')

    })




    // it('should render aid id', () => {
    // const { getByTestId } = render(<Header />)
    //     const aid = getByTestId('aid')
    //     expect(aid).toBeInTheDocument()
    // })

    // it('should render carp text', () => {
    //     const { getByText } = render(<Header />)
    //     const carp = getByText('carp')
    //     expect(carp).toBeTruthy()
    // })

    // it('should render bio title', () => {
    //     const { getByTitle } = render(<Header />)
    //     const bio = getByTitle('bio')
    //     expect(bio).toBeInTheDocument()
    // })

    // it('should render home role', () => {
    //     const { getByRole } = render(<Header />)
    //     const home = getByRole('home')
    //     expect(home).toBeInTheDocument()
    // })
});

// testing prototypes with react testing libary
// unknown if the the describe works.
// only works if render header is repeated.
 // tests cannot br nested i.e no it in it.