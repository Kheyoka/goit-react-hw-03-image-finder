import React, { Component } from 'react';
import * as imageApi from '../services/imageApi';
import LoaderSpinner from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: '',
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.onSearch(query, page);
    }
  }

  onSubmitSearchbar = text => {
    this.setState({
      query: text,
      images: [],
      page: 1,
    });
  };

  onSearch = (query, page) => {
    this.setState({
      isLoading: true,
    });

    imageApi
      .fetchImages(query, page)
      .then(response =>
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
        })),
      )
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });

        this.setState({
          isLoading: false,
        });
      });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmitSearchbar} />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <LoaderSpinner />} <ImageGallery images={images} />
        {images.length > 0 && <Button loadMore={this.loadMore} />}
      </div>
    );
  }
}
