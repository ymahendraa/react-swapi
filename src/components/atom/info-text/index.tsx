import styled from "styled-components";

type InfoTextProps = {
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    margin?: string;
    padding?: string;
}

const InfoText = styled.p<InfoTextProps>`
    font-size: ${(props) => props.fontSize || "18px"};
    font-weight: ${(props) => props.fontWeight || "normal"};
    color: ${(props) => props.color || "white"};
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "0"};
    `;

export default InfoText;