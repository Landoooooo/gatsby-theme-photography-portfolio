import React from "react"
import { HeaderLink } from "../styles/styledComponents"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;

  ul {
    display: flex;
    list-style-type: none;
  }
`
const Header = () => {
  return (
    <Container>
      <HeaderLink to="/">
        <h1>DCWB Productions</h1>
      </HeaderLink>
      <Nav>
        <ul>
          <HeaderLink to="/" nav>
            <li>Gallery</li>
          </HeaderLink>
          <span>|</span>
          <HeaderLink to="/contact" nav>
            <li> Contact</li>
          </HeaderLink>
        </ul>
      </Nav>
    </Container>
  )
}

export default Header
