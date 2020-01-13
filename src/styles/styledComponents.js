import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #666666;
  }

  margin: ${props => (props.nav ? "0 5px 0 5px" : "none")};
`
