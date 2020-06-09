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
          font-size: 1.8rem;
          line-height: 1.4;
        }

        * + * {
          margin-top: 1rem;
        }

        > div {
          margin-top: 0;
        }
      `}
    />
  </>
)

export default GlobalStyles
