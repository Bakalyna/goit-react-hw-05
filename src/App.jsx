// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import NotFoundPage from './pages/NotFoundPage';
import { PuffLoader } from 'react-spinners';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('./components/MovieReviews/MovieReviews')
);
const Navigation = lazy(() => import('./components/Navigation/Navigation'));

function App() {
  return (
    <>
      <Navigation />
      <Suspense
        fallback={
          <div className={'spiner'}>
            <PuffLoader height="80" width="80" color="#4fa94d" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
