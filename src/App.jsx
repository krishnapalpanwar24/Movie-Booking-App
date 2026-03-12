import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import MyBookings from "./pages/MyBookings";
import { BookingProvider } from "./context/BookingContext";

function App(){

return(

<BookingProvider>

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/movie/:id" element={<MovieDetails/>}/>

<Route path="/bookings" element={<MyBookings/>}/>

</Routes>

</BrowserRouter>

</BookingProvider>

)

}

export default App