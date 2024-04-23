import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && css.active, css.link);
};

const Navigation = () => {
  return (
    <header className={css['header']}>
      <nav className={css['header-nav']}>
        <NavLink to={'/'} className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to={'/movies'} className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
export default Navigation;
