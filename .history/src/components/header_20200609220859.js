import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    css={css`
      color: #003459;
      margin-bottom: 1.45rem;
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
        <Link
          to='/'
          style={{
            color: #003459;
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>the links</nav>
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
