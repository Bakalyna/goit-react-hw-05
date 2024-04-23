import { useEffect, useState } from 'react';
import { fetchMovieSearch } from '../movies-API/movies-API';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../components/MovieList/MovieList';
import css from '../components/stylesPages/MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  console.log(query);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (!query) return;
        const data = await fetchMovieSearch(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div className={css['input-wrap']}>
      <input
        type="text"
        value={query || ''}
        onChange={e => setSearchParams({ query: e.target.value })}
        placeholder="Search movie"
        className={css['input']}
      />
      <MovieList movies={movies}></MovieList>
    </div>
  );
};

export default MoviesPage;
