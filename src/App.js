import { useState, useEffect } from "react";
import "./App.css";

import bike from "./assets/images/bike.png";
import auto from "./assets/images/auto.png";
import cab from "./assets/images/cab.png";
import scooty from './assets/images/scooty.png';
import sedan from './assets/images/sedan.png';
import suv from './assets/images/suv.png';
import charminar from './assets/images/charminar.png';
import hitechcity from './assets/images/hitechcity.png';
import biryani from './assets/images/biryani.png';

function App() {
  const [selectedRide, setSelectedRide] = useState(null);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [fare, setFare] = useState(0);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [rideConfirmed, setRideConfirmed] = useState(false);
  const [driverDetails] = useState({
    name: "Arjun Kumar",
    vehicleNumber: "TS09 AB 1234",
    rating: "4.8⭐",
    arrivalTime: "3 mins",
  });
  const [showSafety, setShowSafety] = useState(false);
  const [sosMessage, setSosMessage] = useState("");
  const [time, setTime] = useState(new Date());
  const [activePlace, setActivePlace] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();

  let greeting = "";
  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const handleFindRide = () => {
    if (!pickup || !drop || !selectedRide) {
      alert("Please enter pickup, drop, and select a ride type.");
      return;
    }

    if (selectedRide === "Bike") {
  setFare(50);
} 
else if (selectedRide === "Scooty") {
  setFare(60);
} 
else if (selectedRide === "Auto") {
  setFare(80);
} 
else if (selectedRide === "Cab") {
  setFare(150);
} 
else if (selectedRide === "Sedan") {
  setFare(180);
} 
else if (selectedRide === "SUV") {
  setFare(250);
}

    setShowSummary(true);
    setShowPayment(false);
    setPaymentMethod("");
    setRideConfirmed(false);
  };

  const resetRide = () => {
    setPickup("");
    setDrop("");
    setSelectedRide(null);
    setFare(0);
    setShowSummary(false);
    setShowPayment(false);
    setPaymentMethod("");
    setRideConfirmed(false);
  };

  return (
    <>
      <nav className="navbar">
  <div className="logo">HyderaGo</div>

  <ul className="nav-links">
    
    <li
      onClick={() => {
        const section = document.getElementById("home");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Home
    </li>

    <li
      onClick={() => {
        const section = document.getElementById("about");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }}
    >
      About
    </li>

    <li
      onClick={() => {
        const section = document.getElementById("safety");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Safety
    </li>

    <li
      onClick={() => {
        const section = document.getElementById("contact");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Contact
    </li>

  </ul>
</nav>

      <div id="home" className="hero">
        <div className="content">
          <p className="greeting">
            {greeting}, Hyderabad 👋 | {time.toLocaleTimeString()}
          </p>

          <h1 className="title">HyderaGo</h1>

          <p className="subtitle">
            Explore Hyderabad – From Charminar to HiTech City
          </p>

          <button
            className="btn"
            onClick={() => {
              document
                .getElementById("booking")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book a Ride
          </button>
        </div>
      </div>

      <section className="rides">
        <h2 className="section-title">🚕 Choose Your Ride</h2>
        <div className="ride-cards">
          <div
            className="ride-card"
            onClick={() => setSelectedRide("Bike")}
          >
            <img src={bike} alt="Bike Ride" />
            <h3>Bike</h3>
            <p>1 Passenger</p>
            <p>Quick & Affordable</p>
          </div>

          <div
            className="ride-card"
            onClick={() => setSelectedRide("Auto")}
          >
            <img src={auto} alt="Auto Ride" />
            <h3>Auto</h3>
            <p>Up to 3 Passengers</p>
            <p>Budget Friendly</p>
          </div>

          <div
  className="ride-card"
  onClick={() => setSelectedRide("Cab")}
>
  <img src={cab} alt="Cab Ride" />
  <h3>Cab</h3>
  <p>AC / Non-AC Available</p>
  <p>Up to 4 Passengers</p>
</div>

<div className="ride-card" onClick={() => setSelectedRide("Scooty")}>
  <img src={scooty} alt="Scooty Ride" />
  <h3>Scooty</h3>
  <p>1 Passenger</p>
  <p>Easy & Comfortable</p>
</div>

<div className="ride-card" onClick={() => setSelectedRide("Sedan")}>
  <img src={sedan} alt="Sedan Ride" />
  <h3>Sedan</h3>
  <p>Up to 4 Passengers</p>
  <p>Comfortable Ride</p>
</div>

<div className="ride-card" onClick={() => setSelectedRide("SUV")}>
  <img src={suv} alt="SUV Ride" />
  <h3>SUV</h3>
  <p>6–7 Passengers</p>
  <p>Family / Group Ride</p>
</div>
</div>

        {selectedRide && (
          <p className="selected-ride">Selected Ride: {selectedRide}</p>
        )}
      </section>

      <section id="booking" className="booking">
        <div className="booking-box">
         <h2>📍 Book Your Ride</h2>

          <input
            type="text"
            placeholder="Enter Pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Drop Location"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
          />

          <select
  value={selectedRide || ""}
  onChange={(e) => setSelectedRide(e.target.value)}
>
  <option value="">Select Ride Type</option>
  <option value="Bike">Bike</option>
  <option value="Scooty">Scooty</option>
  <option value="Auto">Auto</option>
  <option value="Cab">Cab</option>
  <option value="Sedan">Sedan</option>
  <option value="SUV">SUV</option>
</select>

          <button className="book-btn" onClick={handleFindRide}>
            Find Ride
          </button>
        </div>
      </section>

      {showSummary && pickup && drop && selectedRide && (
        <div className="ride-summary">
          <h3>Ride Summary</h3>
          <p>
            <strong>Pickup:</strong> {pickup}
          </p>
          <p>
            <strong>Drop:</strong> {drop}
          </p>
          <p>
            <strong>Ride Type:</strong> {selectedRide}
          </p>
          <p>
            <strong>Estimated Fare:</strong> ₹{fare}
          </p>

          <button
            className="payment-btn"
            onClick={() => setShowPayment(true)}
          >
            Proceed to Payment
          </button>
        </div>
      )}

      {showPayment && (
        <div className="payment-section">
          <h3>Select Payment Method</h3>

          <button
            className="pay-option"
            onClick={() => {
              setPaymentMethod("Cash");
              setRideConfirmed(true);
            }}
          >
            Cash
          </button>

          <button
            className="pay-option"
            onClick={() => {
              setPaymentMethod("UPI");
              setRideConfirmed(true);
            }}
          >
            UPI
          </button>

          <button
            className="pay-option"
            onClick={() => {
              setPaymentMethod("Card");
              setRideConfirmed(true);
            }}
          >
            Card
          </button>

          <p className="payment-note">
            After selecting payment, your ride will be confirmed.
          </p>

          {paymentMethod && (
            <p className="payment-confirmation">
              Your payment method is confirmed:{" "}
              <strong>{paymentMethod}</strong>
            </p>
          )}
        </div>
      )}

      {rideConfirmed && (
        <div className="ride-confirmed">
          <h2>Ride Confirmed 🎉</h2>

          <p>
            <strong>Pickup:</strong> {pickup}
          </p>
          <p>
            <strong>Drop:</strong> {drop}
          </p>
          <p>
            <strong>Vehicle:</strong> {selectedRide}
          </p>
          <p>
            <strong>Payment Method:</strong> {paymentMethod}
          </p>

          <hr />

          <h3>Driver Details</h3>

          <p>
            <strong>Name:</strong> {driverDetails.name}
          </p>
          <p>
            <strong>Vehicle Number:</strong> {driverDetails.vehicleNumber}
          </p>
          <p>
            <strong>Rating:</strong> {driverDetails.rating}
          </p>
          <p>
            <strong>Arrival Time:</strong> {driverDetails.arrivalTime}
          </p>

          <button className="book-btn" onClick={resetRide}>
            Book Another Ride
          </button>
        </div>
      )}

      <section id="about" className="about">
  <h2 className="section-title">🏙️ Why Visit Hyderabad?</h2>

  <div className="cards">
    <div
      className="card place-card"
      onClick={() =>
        setActivePlace(activePlace === "charminar" ? "" : "charminar")
      }
    >
      <img src={charminar} alt="Charminar" className="place-img" />
      <h3>Charminar</h3>
      <p>
        Experience the historic heart of the city and its vibrant bazaars.
      </p>

     {activePlace === "charminar" && (
  <div className="place-details">
    Charminar is one of Hyderabad’s most famous monuments, built in 1591.
    It is known for its historic architecture and bustling local bazaars.
  </div>
)}
    </div>

    <div
      className="card place-card"
      onClick={() =>
        setActivePlace(activePlace === "hitechcity" ? "" : "hitechcity")
      }
    >
      <img src={hitechcity} alt="HiTech City" className="place-img" />
      <h3>HiTech City</h3>
      <p>
        Discover the modern IT hub and futuristic skyline.
      </p>

      {activePlace === "hitechcity" && (
  <div className="place-details">
    HiTech City is Hyderabad’s major technology and business hub. It is
    known for modern office buildings, IT companies, and rapid urban
    development.
  </div>
)}
    </div>

    <div
      className="card place-card"
      onClick={() =>
        setActivePlace(activePlace === "biryani" ? "" : "biryani")
      }
    >
      <img src={biryani} alt="Hyderabadi Biryani" className="place-img" />
      <h3>Famous Food</h3>
      <p>
        Taste the legendary Hyderabadi biryani and street delicacies.
      </p>

    {activePlace === "biryani" && (
  <div className="place-details">
    Hyderabad is famous for its delicious biryani, haleem, and rich
    traditional flavors. The city is well known for its unique food
    culture.
  </div>
)}
    </div>
  </div>
</section>

<section id="safety" className="safety">
  <h2 className="section-title">🛡️ Safety First</h2>

  <div className="cards">
    <div className="card">
      <h3>Live Ride Status</h3>
      <p>Users can monitor ride progress clearly during travel.</p>
    </div>

    <div className="card">
      <h3>Emergency Support</h3>
      <p>Quick access help option in case of discomfort.</p>
    </div>

    <div className="card">
      <h3>Night Mode Safety</h3>
      <p>Extra visibility and safe ride focus during late hours.</p>
    </div>
  </div>
</section>


    <section id="contact" className="contact">
  <h2 className="section-title">📞 Contact Us</h2>

  <div className="contact-container">
    <div className="contact-box">
      <p><strong>Email:</strong> support@hyderago.com</p>
      <p><strong>Customer Support:</strong> +91 1800 000 000</p>
      <p><strong>Location:</strong> Hyderabad, Telangana</p>
    </div>

    <div className="map-box">
      <iframe
        title="Hyderabad Map"
        src="https://www.google.com/maps?q=Hyderabad&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</section>

      <button
        className="sos-btn"
        onClick={() => setShowSafety(true)}
      >
        SOS
      </button>

      {showSafety && (
        <div
          className="safety-modal"
          onClick={() => setShowSafety(false)}
        >
          <div
            className="safety-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Emergency Assistance</h2>
            {sosMessage && (
  <p className="sos-message">{sosMessage}</p>
)}

            <button
  className="safety-option"
  onClick={() => setSosMessage("Emergency support has been alerted.")}
>
  Call Emergency
</button>

<button
  className="safety-option"
  onClick={() => setSosMessage("Your live location has been shared successfully.")}
>
  Share Live Location
</button>

<button
  className="safety-option"
  onClick={() => setSosMessage("Your ride has been cancelled successfully.")}
>
  Cancel Ride
</button>

            <button
              className="close-btn"
              onClick={() => setShowSafety(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>© 2026 HyderaGo. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;