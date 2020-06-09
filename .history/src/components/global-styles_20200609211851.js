import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
  <>
    <Global
      css={css`
        background-color: green;
      `}
    />
  </>
)

export default GlobalStyles
