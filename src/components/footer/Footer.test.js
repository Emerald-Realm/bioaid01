import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Footer from './Footer'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Footer Component', () => {
    it('should render', () => {
        const { getByText } = render (
            <Router>
                <Footer />
            </Router>
        )

        getByText('Bio')
        getByText(/2021/)

        fireEvent.click(screen.getByText('Click here to see disclaimer'));
    }) 
});