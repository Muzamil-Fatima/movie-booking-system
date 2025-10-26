import React from "react";
import { Navbar } from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home"
import MovieDetails from "./pages/MovieDetails";
import SeatLayout from "./pages/SeatLayout";
import MyBookings from "./pages/MyBookings";
import Favorite from "./pages/Favorite";
export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movie/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </>
  );
};
export default App;
