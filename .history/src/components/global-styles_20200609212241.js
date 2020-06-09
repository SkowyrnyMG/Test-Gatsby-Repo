import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
        }
      `}
    />
  </>
)

export default GlobalStyles
