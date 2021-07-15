import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function Gallery(props) {
  return (
    <ImageGallery
      items={props.link}
      showPlayButton={false}
      showFullscreenButton={false}
      showThumbnails={false}
      autoPlay={true}
      lazyLoad={true}
      showBullets={true}
    />
  );
}

export default Gallery;
