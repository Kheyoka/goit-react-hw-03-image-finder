import axios from 'axios';

/* eslint-disable-next-line */
export const fetchImages = (query, page = 1) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=15197771-5511dcdc0b7dffb5a53231b1f&image_type=photo&orientation=horizontal&per_page=12`,
  );
};
// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
