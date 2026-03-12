import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import movies from "../data/movies";

export default function MyBookings(){

const { bookings } = useContext(BookingContext);

return(

<div className="tickets-container">

<h2>My Tickets</h2>

{bookings.map((b,i)=>{

const movie = movies.find(m=>m.title === b.movie);

return(

<div key={i} className="ticket-card">

<img src={movie.image} />

<div className="ticket-info">

<h3>{b.movie}</h3>
<p>Seat: {b.seat}</p>

</div>

</div>

)

})}

</div>

)

}