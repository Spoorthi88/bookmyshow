
import { useNavigate } from "react-router-dom";

const MovieCards = ({ movies }) => {
    const navigate = useNavigate();
  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <div className="movie-card" key={movie._id}>
          <img
            src={movie.image}
            alt={movie.title}
            className="movie-image"
          />

          <div className="movie-details">
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <p>{movie.language}</p>

            <button onClick={()=> navigate(`/theatre/${movie._id}`)}>Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCards;
