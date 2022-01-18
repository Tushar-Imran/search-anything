import React from "react";

const ImageList = (props) => {
  // console.log(props.images);

  return props.images.map((image) => {
    return (
      <img alt={image.description} key={image.id} src={image.urls.regular} />
    );
  });

  return <div>ImageList</div>;
};

export default ImageList;
