import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Navbar from "../components/molecules/navbar"

const StyledRootLayout = styled.div`
  display: flex;
  align-items: center;
  background-color: #000000;
  /* background-image: radial-gradient(circle, #3c053f, #33062b, #28071c, #1b030f, #000000); */
  flex-direction: column;
  height: 100vh;
  max-width: 100vw;`

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff10;
  height: 100vh;
  width: 100%;
  overflow: auto; 
  padding: 2rem;

  /* Hide scrollbar for WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 992px) {
    /* Adjust the breakpoint as needed (992px is often used for lg screens) */
    max-width: 80vw;
  }
`

const Layout = () => {
  return (
    <StyledRootLayout>
      <Navbar />
      <StyledLayout>
        <Outlet />
      </StyledLayout>
    </StyledRootLayout>
  )
}

export default Layout