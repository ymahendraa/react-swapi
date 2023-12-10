import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import StyledButton from '.';

describe('StyledButton Component', () => {
    it('renders button with default styles', () => {
        const { getByRole } = render(<StyledButton>Click me</StyledButton>);
        const button = getByRole('button');

        expect(button).toMatchSnapshot();
        expect(button).toHaveStyleRule('background', '-webkit-linear-gradient(#ff00e6, #02c4ff)');
        expect(button).toHaveStyleRule('color', 'white');
        expect(button).toHaveStyleRule('padding', '10px 20px');
        expect(button).toHaveStyleRule('border-radius', '10px');
        expect(button).toHaveStyleRule('border', 'none');
        expect(button).toHaveStyleRule('cursor', 'pointer');
    });

    it('applies custom styles', () => {
        const { getByRole } = render(
            <StyledButton
                background="blue"
                hoverbackground="blue"
                color="yellow"
                borderradius="5px"
            >
                Click me
            </StyledButton>
        );
        const button = getByRole('button');

        expect(button).toMatchSnapshot();
        expect(button).toHaveStyleRule('background', 'blue');
        expect(button).toHaveStyleRule('color', 'yellow');
        expect(button).toHaveStyleRule('border-radius', '5px');
    });

    it('applies disabled styles', () => {
        const { getByRole } = render(<StyledButton disabled>Click me</StyledButton>);
        const button = getByRole('button');

        expect(button).toMatchSnapshot();
        expect(button).toHaveStyle('background: #d3d3d3');
        expect(button).toHaveStyle('cursor: not-allowed');

    });

    it('handles click event', () => {
        const handleClick = jest.fn();
        const { getByRole } = render(<StyledButton onClick={handleClick}>Click me</StyledButton>);
        const button = getByRole('button');

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
