export default function SeatSelector({ onSelect, bookedSeats, selectedSeat }) {
  
  const rows = ["A", "B", "C", "D"];
  const seatsPerRow = 5;

  return (
    <div className="cinema-seats">
      {rows.map((row) => (
        <div key={row} className="seat-row">
          <span className="row-label">{row}</span>
          {Array.from({ length: seatsPerRow }, (_, i) => {
            const seatNumber = i + 1 + rows.indexOf(row) * seatsPerRow; 
            return (
              <button
                key={seatNumber}
                disabled={bookedSeats.includes(seatNumber)}
                className={
                  bookedSeats.includes(seatNumber)
                    ? "booked"
                    : seatNumber === selectedSeat
                    ? "selected"
                    : ""
                }
                onClick={() => onSelect(seatNumber)}
              >
                {seatNumber}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}