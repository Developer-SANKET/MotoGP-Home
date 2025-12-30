import React from "react";
import "./App.css";

const bikes = [
  {
    name: "Ducati Desmosedici GP23",
    price: "$250,000",
    image: "/bikes/ducati.jpg"
  },
  {
    name: "Yamaha YZR-M1",
    price: "$220,000",
    image: "/bikes/yamaha.jpg"
  },
  {
    name: "Honda RC213V",
    price: "$230,000",
    image: "/bikes/honda.jpg"
  },
  {
    name: "KTM RC16",
    price: "$210,000",
    image: "/bikes/ktm.jpg"
  },
  {
    name: "Aprilia RS-GP",
    price: "$215,000",
    image: "/bikes/aprilia.jpg"
  }
];

function App() {
  return (
    <div className="video-container">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/videos/motogp-race.mp4" type="video/mp4" />
      </video>
      <div className="overlay">
        <h1>MotoGP Luxury Bikes</h1>
        <p>Elite racing machines for collectors</p>

        <div className="bike-grid">
          {bikes.map((bike, index) => (
            <div key={index} className="bike-card">
              <img src={bike.image} alt={bike.name} />
              <h2>{bike.name}</h2>
              <p className="price">{bike.price}</p>
              <button>View Detail</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
