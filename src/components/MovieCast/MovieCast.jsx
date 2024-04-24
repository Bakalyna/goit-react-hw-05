import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../movies-API/movies-API';
import CastList from '../CastList/CastList';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      <CastList cast={cast}></CastList>
    </div>
  );
};

export default MovieCast;
