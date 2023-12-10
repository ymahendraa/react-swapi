import React from 'react';
import { render } from '@testing-library/react';
import RenderPlanets from '.';

const mockPlanet = {
    name: 'Test Planet',
    population: '1000000',
    url: 'https://swapi.dev/api/planets/1/',
};

const mockProps = {
    planets: [mockPlanet],
    loading: false,
    error: null,
    observerTarget: { current: document.createElement('div') },
};

// Mock the react-router-dom module
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('RenderPlanets Component', () => {
    it('renders planets correctly', () => {
        // Set up a mock implementation for useNavigate
        require('react-router-dom').useNavigate.mockReturnValue(jest.fn());

        const { getByText, getByTestId, queryByTestId } = render(<RenderPlanets {...mockProps} />);


        // Check if the planet is rendered
        expect(getByText('Test Planet')).toBeInTheDocument();
        expect(getByText('Population: 1000000')).toBeInTheDocument();

        // Check if the loader is not rendered
        const loader = queryByTestId('loader');
        expect(loader).not.toBeInTheDocument();

        // Check if the error message is not rendered
        const error = queryByTestId('error');
        expect(error).not.toBeInTheDocument();

        // Check if the observer target is rendered
        const observer = getByTestId('observer');
        expect(observer).toBeInTheDocument();
    });
});
