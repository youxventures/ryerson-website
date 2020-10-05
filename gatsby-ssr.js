import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="https://www.youtube.com/iframe_api"
      src="https://www.youtube.com/iframe_api"
    />
  ])
}