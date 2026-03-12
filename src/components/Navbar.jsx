import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>🎬 Movie Booking</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/bookings">My Tickets</Link>
      </div>
    </div>
  );
}