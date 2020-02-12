import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image: { webformatURL, largeImageURL } }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      src={webformatURL}
      alt={largeImageURL}
      className={styles.ImageGalleryItemImage}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
