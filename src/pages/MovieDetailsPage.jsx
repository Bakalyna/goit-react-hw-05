import { useEffect, useRef, useState } from 'react';
import { fetchMovieId } from '../movies-API/movies-API';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from '../components/stylesPages/MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movieDetails, setDetailsMovies] = useState({});

  const goBack = useRef(location?.state ?? '/movies');

  useEffect(() => {
    const fetchDetailsMovies = async () => {
      try {
        const responseDetails = await fetchMovieId(movieId);
        setDetailsMovies(responseDetails);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetailsMovies();
  }, [movieId]);

  return (
    <div className={css.mainWrap}>
      <Link to={goBack.current} className={css.button}>
        Go back
      </Link>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
        alt=""
        className={css.poster}
      />
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <hr />
      <ul className={css['details-list']}>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <hr />
      <Outlet></Outlet>
    </div>
  );
};

export default MovieDetailsPage;
