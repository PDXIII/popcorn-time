const MovieCard = (props) => {
  return (
    <div className="Movie p-4 hover:shadow-md">
      <h3>{props.movie.title}</h3>
      {props.movie.imgURL ? (
        <img src={props.movie.imgURL} alt="" />
      ) : (
        <img src="https://dummyimage.com/182x268/aaaaaa/ffffff" alt="" />
      )}
      <p>Rating: {props.movie.rating}</p>
      <button
        onClick={() => {
          props.deleteHandler(props.movie.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default MovieCard;
