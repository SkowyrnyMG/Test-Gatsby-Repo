import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        body {
          background: green;
          font-size: 20px !important;
        }
      `}
    />
  </>
)

export default GlobalStyles
