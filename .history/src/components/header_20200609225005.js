import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React from 'react'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #003459;
  margin: 0 0.5 0 0;

  &.activeLink {
    color: #00a7e1;
  }
`

const Header = ({ siteTitle }) => (
  <header
    css={css`
      color: #003459;
      margin-bottom: 1.45rem;
      box-shadow: 0 0 1rem -0.5rem #000000dd;
    `}
  >
    <div
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem calc((100% - 1024px) / 2);
      `}
    >
      <h1 style={{ margin: 0 }}>
        <StyledLink to='/'>{siteTitle}</StyledLink>
      </h1>
      <nav>
        <StyledLink to='/' activeClassName='activeLink'>
          Home
        </StyledLink>
        <StyledLink to='/blog/' activeClassName='activeLink'>
          Blog
        </StyledLink>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
