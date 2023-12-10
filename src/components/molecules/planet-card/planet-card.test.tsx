import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import PlanetCard, { CardProps } from '.';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn()
}));

describe('PlanetCard Component', () => {
    const mockProps: CardProps = {
        header: 'Test Header',
        imageSrc: 'test-image.jpg',
        content: 'Test Content',
        targetUrl: '/test-url',
    };

    it('renders the card with correct content', () => {
        const { getByText, getByAltText } = render(
            <PlanetCard {...mockProps} />,
        );

        expect(getByText('Test Header')).toBeInTheDocument();
        expect(getByText('Test Content')).toBeInTheDocument();
        expect(getByAltText('Card Image')).toHaveAttribute('src', 'test-image.jpg');
    });

    it('navigate to the correct url when clicked', () => {
        const mockNavigate = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

        render(
            <MemoryRouter>
                <PlanetCard {...mockProps} />
            </MemoryRouter>,
        );

        fireEvent.click(screen.getByRole('button'));

        expect(mockNavigate).toHaveBeenCalledWith('/test-url');
    }
    );

});
