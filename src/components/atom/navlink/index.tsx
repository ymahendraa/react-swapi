import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(Link)`
  margin-right: 1rem;
  color: #ffffff;
  text-decoration: none;
font-weight: bold;

  &:hover {
    color: #ff0000;
  }
`;


export default StyledNavLink;