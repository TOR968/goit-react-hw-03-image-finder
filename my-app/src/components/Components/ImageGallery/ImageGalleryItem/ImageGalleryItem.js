import React, { Component } from 'react';
import styles from '../../../utils/styles.module.css';
import Modal from '../../Modal/Modal';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component({ url, alt, largeImageURL }) {
  constructor(props) {
    super(props);
    this.state = {
      IsModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({
      IsModalOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      IsModalOpen: false,
    });
  };

  render() {
    return (
      <li className={styles.ImageGalleryItem}>
        <img
          src={url}
          alt={alt}
          className={styles['ImageGalleryItem-image']}
          onClick={this.openModal}
        />
        {isModalOpen && (
          <Modal closeModal={this.closeModal}>
            <img src={largeImageURL} alt={alt} />
          </Modal>
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
