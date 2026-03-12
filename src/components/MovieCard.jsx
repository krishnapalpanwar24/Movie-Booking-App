import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {

return(

<div className="movie-card">

<img src={movie.image} />

<div className="movie-info">

<h3>{movie.title}</h3>

<p>⭐ {movie.rating}</p>

<Link to={`/movie/${movie.id}`}>
<button>Book Ticket</button>
</Link>

</div>

</div>

)

}