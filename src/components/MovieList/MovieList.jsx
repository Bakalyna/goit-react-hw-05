import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={css['mov-list']}>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`} state={location}>
                  {movie.title}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;
