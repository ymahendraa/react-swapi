import styled from "styled-components"

type FlexBoxProps = {
  alignItems?: string;
  flexDirection?: string;
  backgroundColor?: string;
  color?: string;
  width?: string;
  justifyContent?: string;
  height?: string;
  gap?: string;
  padding?: string;
  flexWrap?: string;
}

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  box-sizing: border-box;
  flex-direction: ${(props) => props.flexDirection || "row"};
  gap: ${(props) => props.gap || "0"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "center"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: ${(props) => props.color || "black"};
  border: none;
  padding: ${(props) => props.padding || "10px 20px"};
  border-radius: 15px;
`

export default FlexBox