import React from "react";
import "./App.css";

const bikes = [
  { name: "Ducati Desmosedici GP23", price: "$250,000" },
  { name: "Yamaha YZR-M1", price: "$220,000" },
  { name: "Honda RC213V", price: "$230,000" },
  { name: "KTM RC16", price: "$210,000" },
  { name: "Aprilia RS-GP", price: "$215,000" }
];

function App() {
  return (
    <div className="app">
      <h1>MotoGP Luxury Bikes</h1>
      <p>High-performance racing machines available for elite collectors</p>

      <div className="bike-grid">
        {bikes.map((bike, index) => (
          <div key={index} className="bike-card">
            <h2>{bike.name}</h2>
            <p className="price">{bike.price}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
