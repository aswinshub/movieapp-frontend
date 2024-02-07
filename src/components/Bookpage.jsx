import React, { useState, useEffect } from 'react';
import './bookstyle.css';

const MovieBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketPrice, setTicketPrice] = useState(10); // Default ticket price

  useEffect(() => {
    updateSelectedCount();
  }, [selectedSeats, ticketPrice]);

  // Save selected movie index and price
  const setMovieData = (movieIndex, moviePrice) => {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
  };

  // Update total and count
  const updateSelectedCount = () => {
    const selectedSeatsCount = selectedSeats.length;
    const totalCost = selectedSeatsCount * ticketPrice;
    document.getElementById('count').innerText = selectedSeatsCount;
    document.getElementById('total').innerText = totalCost;
  };

  // Seat click event
  const handleSeatClick = (index) => {
    const updatedSeats = [...selectedSeats];
    const seatIndex = updatedSeats.indexOf(index);
    if (seatIndex > -1) {
      updatedSeats.splice(seatIndex, 1);
    } else {
      updatedSeats.push(index);
    }
    setSelectedSeats(updatedSeats);
  };

  // Movie select event
  const handleMovieSelect = (e) => {
    setTicketPrice(+e.target.value);
    setMovieData(e.target.selectedIndex, e.target.value);
  };

  return (
    <div className='book'>
      <h3>Book now</h3>
   
      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>N/A</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>
      <div className="container">
        <div className="screen"></div>
        <div className="row">
    
          {[...Array(40)].map((_, index) => (
            <div
              key={index}
              className={`seat ${selectedSeats.includes(index) ? 'selected' : ''}`}
              onClick={() => handleSeatClick(index)}
            ></div>
          ))}
        </div>
      </div>
      <p className="text">
        You have selected <span id="count">0</span> seats for a price of $<span id="total">0</span>
      </p>
    </div>
  );
};

export default MovieBooking;
