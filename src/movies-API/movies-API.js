import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGY3MWRjNGEzOWNkNDQ0ZjVkYjM0OGUyZTc5NzgxMSIsInN1YiI6IjY2MWNkN2NjY2I2ZGI1MDE2MjA5MjRjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CO4jsckm0ingKKSO_bBWJ7fZyhUuQ-Rs1bmtIJXTSYQ',
  },
};

export const fetchMovieReviews = async movie_id => {
  const url = `movie/${movie_id}/reviews?language=en-US`;
  const resp = await axios.get(url, options);
  console.log(fetchMovieReviews);
  return resp.data;
};

export const fetchMovieCredits = async movie_id => {
  const url = `movie/${movie_id}/credits?language=en-US`;
  const resp = await axios.get(url, options);
  return resp.data;
};

export const fetchMoviesTrending = async () => {
  const url = `trending/movie/day?language=en-US`;
  const resp = await axios.get(url, options);
  return resp.data;
};

export const fetchMovieId = async movie_id => {
  const url = `movie/${movie_id}?language=en-US`;
  const resp = await axios.get(url, options);
  return resp.data;
};

export const fetchMovieSearch = async query => {
  const url = `search/movie?query=${query}&include_adult=false&language=en-US`;
  const resp = await axios.get(url, options);
  return resp.data;
};
