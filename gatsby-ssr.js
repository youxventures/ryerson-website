var React = require("react")

// export const onRenderBody = ({ setPostBodyComponents }) => {
//   setPostBodyComponents([
//     <script
//       key="https://www.youtube.com/iframe_api"
//       src="https://www.youtube.com/iframe_api"
//     />
//   ])
// }

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();

  headComponents.sort((a, b) => {
    if (a.props && a.props["data-react-helmet"]) {
      return 0
    }
      return 1
  })

  replaceHeadComponents(headComponents)
}