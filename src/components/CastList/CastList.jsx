import css from "./CastList.module.css"

const CastList = ({ cast }) => {
  return (
    <div>
      <ul className={css["cast-list"]}>
        {cast.map(item => {
          return (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt=""
                className={css['cast-img']}
              />
              <p>{item.name}</p>
              <p>{item.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CastList;
