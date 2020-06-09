import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        body {
          font-size: 20px !important;
        }
      `}
    />
  </>
)

export default GlobalStyles
