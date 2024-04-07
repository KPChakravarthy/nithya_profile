import React from "react";
import MyLoader from "../MyLoader";

interface ImageProps {
  src: string;
  className?: string;
}

const Image = ({ src, className }: ImageProps) => {
  const [loaded, setLoaded] = React.useState(false);

  const imgLoading = {
    opacity: 0,
    transition: 'opacity 1s',
  }
  const imgLoaded = {
    opacity: 1,
  }

  return (
    <React.Fragment>
      {loaded ? null : (
        <MyLoader />
      )}
      <span style={loaded ? imgLoaded : imgLoading}>
        <img
          {...className ? {className} : {}}
          src={src}
          onLoad={() => setLoaded(true)}
        />
      </span>
    </React.Fragment>
  );
};

export default Image;
