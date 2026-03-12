import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { BookingContext } from "../context/BookingContext";
import SeatSelector from "../components/SeatSelector";
import movies from "../data/movies";

// Firebase
import { db } from "../firebase/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function MovieDetails() {
  const { id } = useParams();
  const { addBooking } = useContext(BookingContext);

  const [seat, setSeat] = useState(null);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [time, setTime] = useState("7:00 PM"); 

  const movie = movies.find((m) => m.id === Number(id));

  const availableTimes = ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"];

  
  useEffect(() => {
    const fetchBookedSeats = async () => {
      const querySnapshot = await getDocs(collection(db, "bookings"));
      const seats = querySnapshot.docs
        .filter(doc => doc.data().movie === movie.title && doc.data().time === time)
        .map(doc => doc.data().seat);
      setBookedSeats(seats);
    };
    fetchBookedSeats();
  }, [movie.title, time]); 

  
  const bookTicket = async () => {
    if (!seat) {
      alert("Please select a seat!");
      return;
    }
    if (bookedSeats.includes(seat)) {
      alert("Seat already booked!");
      return;
    }

    try {
    
      await addDoc(collection(db, "bookings"), {
        movie: movie.title,
        seat: seat,
        time: time,
      });

      
      addBooking({ movie: movie.title, seat: seat, time: time });

      alert(`Ticket booked successfully! 🎉 Movie: ${movie.title}, Seat: ${seat}, Time: ${time}`);

      setBookedSeats([...bookedSeats, seat]);
      setSeat(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="details">
      <img src={movie.image} alt={movie.title} />

      <div>
        <h2>{movie.title}</h2>

        <p>Select time:</p>
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <p>Select your seat:</p>
        <SeatSelector
          onSelect={(s) => setSeat(s)}
          bookedSeats={bookedSeats}
          selectedSeat={seat}
        />

        <button onClick={bookTicket}>Book Ticket</button>
      </div>
    </div>
  );
}