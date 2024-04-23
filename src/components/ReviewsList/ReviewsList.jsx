import css from './ReviewsList.module.css';
const ReviewsList = ({ reviews }) => {
  if (reviews.length === 0) {
    return <div>We don`t have any reviews for this movie</div>;
  }

  return (
    <div>
      <ul className={css['reviews-list']}>
        {reviews.map(item => {
          return (
            <li key={item.id}>
              <h5>Author:{item.author}</h5>
              <p>{item.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewsList;
