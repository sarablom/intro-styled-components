import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';

function NavBar() {
    return (
        <NavBarWrapper>
            <NavList>
                <ListItem><Link to="faq">FAQ</Link></ListItem>
                <ListItem><Link to="contact">Contact Card</Link></ListItem>
                <ListItem><Link to="login">Login Form</Link></ListItem>
            </NavList>
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.nav `
display: flex;
align-items: center;
justify-content: center;

`

const NavList = styled.ul `
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 50%;
list-style-type: none;
`

const ListItem = styled.li `
padding: 2rem;
`

export default NavBar
