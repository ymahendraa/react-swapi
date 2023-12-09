import React from 'react'
import StyledNavbar from '../../atom/navbar'
import StyledNavLink from '../../atom/navlink'

const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledNavLink to="/planets">Planets</StyledNavLink>
            <StyledNavLink to="/wishlist">Wishlist</StyledNavLink>
        </StyledNavbar>
    )
}

export default Navbar