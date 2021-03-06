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

        html {
          font-size: 62.5%;
        }

        body {
          /* font-size: 1.8rem; */
        }
      `}
    />
  </>
)

export default GlobalStyles
