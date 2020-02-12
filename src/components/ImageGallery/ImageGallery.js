import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from '../Modal/Modal';

class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  };

  state = {
    isModalOpen: false,
    largeImageURL: null,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  openModal = e => {
    if (e.currentTarget !== e.target) {
      const URL = e.target.alt;
      this.setState({ isModalOpen: true, largeImageURL: URL });
    }
  };

  closeModal = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { isModalOpen, largeImageURL } = this.state;
    const { images } = this.props;
    return (
      <>
        <ul
          className={styles.ImageGallery}
          onClick={this.openModal}
          role="presentation"
        >
          {images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
          {isModalOpen && (
            <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
          )}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
