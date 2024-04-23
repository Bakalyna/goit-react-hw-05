import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <Link to="/">Go home</Link>
      <h2>Opps... Something gone wrong. Try to refresh page</h2>
    </>
  );
};
export default NotFoundPage;
