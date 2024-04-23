import { useEffect, useState } from 'react';
import { fetchMoviesTrending } from '../movies-API/movies-API';
import MovieList from '../components/MovieList/MovieList';
import { PuffLoader } from 'react-spinners';
import NotFoundPage from './NotFoundPage';
import css from '../components/stylesPages/HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFetchedMovies = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMoviesTrending();
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getFetchedMovies();
  }, []);

  return (
    <div className={css['home-wrap']}>
      {isLoading && (
        <div className={css.spiner}>
          <PuffLoader height="80" width="80" color="#4fa94d" />
        </div>
      )}
      {error && <NotFoundPage />}
      <div>
        <h2>Trending Today</h2>
        <MovieList movies={movies}></MovieList>
      </div>
    </div>
  );
};

export default HomePage;
