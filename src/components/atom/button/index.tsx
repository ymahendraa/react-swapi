import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    background?: string;
    hoverbackground?: string;
    color?: string;
    width?: string;
    justifyContent?: string;
    height?: string;
    gap?: string;
    padding?: string;
    flexWrap?: string;
    borderradius?: string;
    border?: string;
}

const StyledButton = styled.button<Props>`
    background: ${({ background }) => background || "-webkit-linear-gradient(#ff00e6, #02c4ff)"};
    color: ${({ color }) => color || "white"};
    border: none;
    font-weight: bold;
    padding: ${({ padding }) => padding || "10px 20px"};
    border-radius: ${({ borderradius: borderRadius }) => borderRadius || "10px"};
    border: ${({ border }) => border || "none"};
    cursor: pointer;
    &:hover {
        background: ${({ hoverbackground: hoverBackground }) => hoverBackground || "-webkit-linear-gradient(#67065d, #085871)"};
    }

    &:disabled {
    background: #d3d3d3; /* Set your disabled background color */
    cursor: not-allowed;
    }
    `;

export default StyledButton;


