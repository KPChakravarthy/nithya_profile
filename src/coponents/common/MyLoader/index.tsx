import React from "react"
import ContentLoader from "react-content-loader"

interface LoaderProps {}

const MyLoader = (props: LoaderProps) => (
  <ContentLoader 
    speed={2}
    width={"100%"}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    animate
    {...props}
  >
    <rect x="-2" y="9" rx="2" ry="2" width="400" height="240" />
  </ContentLoader>
)

export default MyLoader