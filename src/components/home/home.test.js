import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import Home from './Home'
import { BrowserRouter as Router, Link } from "react-router-dom";

describe('home component', () => {

    let home;

    beforeEach(() => {
        home = render(
            <Router>
                <Home />
            </Router>
        );
    });

    it('should render the following', () => {
        const { getByText, getByTestId, getByRole } = home

        getByText('Take Some Time.')
        const exaam = getByText('Start Exam')
        getByText(/Pass Our Exam and Receive Your Certificate/)

        fireEvent.click(exaam)

    })
})
