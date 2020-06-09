import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
  <>
    <Global
      css={css`
        body {
          background: green;
          font-size: 20px;
        }
      `}
    />
  </>
)

export default GlobalStyles
