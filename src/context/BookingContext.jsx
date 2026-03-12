import { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {

  const [bookings, setBookings] = useState([]);

  const addBooking = (data) => {
    setBookings([...bookings, data]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};