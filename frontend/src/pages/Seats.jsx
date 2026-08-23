import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Seats() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  const seats = [
    "A1", "A2", "A3", "A4", "A5",
    "B1", "B2", "B3", "B4", "B5",
    "C1", "C2", "C3", "C4", "C5",
    "D1", "D2", "D3", "D4", "D5"
  ];

  const seatPrice = 150;

  const selectSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((item) => item !== seat)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const bookSeats = async () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }
    try {
        const response = await fetch("http://localhost:5000/api/bookings" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:
            JSON.stringify({
                seats:
                selectedSeats,
                total: selectedSeats.length * seatPrice
            })
        });
        const data = await response.json();
        if(!response.ok){
            console.log("Backend error:",data);
            alert(data.message || "Booking failed");
            return;
        }
        if(data.success){
            navigate("/success");
        }else{
            alert(data.message || "Booking failed");
        }
        }
    catch (error) {
        console.log(error);
        alert("Server error");
    }
  };
  return (
    <div>
      <h1>Select Your Seats</h1>

      <div>
        {seats.map((seat) => (
          <button
            key={seat}
            onClick={() => selectSeat(seat)}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor: selectedSeats.includes(seat)
                ? "green"
                : "lightgray",
              color: selectedSeats.includes(seat)
                ? "white"
                : "black"
            }}
          >
            {seat}
          </button>
        ))}
      </div>

      <h3>
        Selected Seats:{" "}
        {selectedSeats.length > 0
          ? selectedSeats.join(", ")
          : "None"}
      </h3>

      <h3>
        Total: ₹{selectedSeats.length * seatPrice}
      </h3>

      <button onClick={bookSeats}>
        Book Now
      </button>
    </div>
  );
}

export default Seats;
