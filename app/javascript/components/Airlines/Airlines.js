import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Airline from '../Airline/Airline';

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/airlines.json')
     .then( resp => setAirlines(resp.data.data))
    .catch( data => {
      debugger
    })
  },[])

    const grid = airlines.map( (airline, index) => {
      return (<li key={index} >{airline.attributes.name}</li>)
  })

  return (
    <div className="home">
      <div className="header">
        <h1>OpenFlights</h1>
        <p className="subheader">
          Honest, unbiased airline reviews. Share your experience.
        </p>
      </div>
      <div className="grid">
        <ul>
          {grid}
        </ul>
      </div>
    </div>
  );
};

export default Airlines;
