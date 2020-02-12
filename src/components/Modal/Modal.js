import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ largeImageURL, onClose }) => (
  <div className={styles.Overlay} onClick={onClose} role="presentation">
    <div className={styles.Modal}>
      <img src={largeImageURL} alt="" />
    </div>
  </div>
);

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
