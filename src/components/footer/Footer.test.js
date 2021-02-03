import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Footer from './Footer'
import { faItalic } from '@fortawesome/free-solid-svg-icons';

describe('Footer Component', () => {
    it('should render', () => {
        const { getByText } = render (<Footer />)

        getByText('Bio')
        getByText(/2021/)

        fireEvent.click(screen.getByText('Click here to see disclaimer'));
    }) 
});