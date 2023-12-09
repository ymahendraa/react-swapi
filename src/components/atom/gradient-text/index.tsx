import styled from "styled-components";

type GradientTextProps = {
    fontSize?: string;
    fontWeight?: string;
    fontFamily?: string;
    color1?: string;
    color2?: string;
    margin?: string;
    padding?: string;
}

const GradientText = styled.p<GradientTextProps>`
    font-family: ${(props) => props.fontFamily || "poppins"};
    font-size: ${(props) => props.fontSize || "1rem"};
    font-weight: ${(props) => props.fontWeight || "normal"};
    background: ${(props) => props.color1 && props.color2 ? `-webkit-linear-gradient(${props.color1}, ${props.color2})` : "none"};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "0"};
    `;

export default GradientText;