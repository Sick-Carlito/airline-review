import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from './Header'


const Airline = (props) => {
  //  const slug = props.match.params.slug

  //  console.log(slug)

  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = "/api/v1/airlines/" + slug;

    axios
      .get(url)
      .then((resp) => {
        setAirline(resp.data);
        console.log(resp.data)
        setLoaded(true)
      })
      .catch( resp => console.log(resp) )
  }, []);

  return (
    <div>
      <div className="column">
        {
          loaded &&
          <Header attributes={airline.data.attributes}l/>
        }

        <div className="reviews">[reviews will go here]</div>
      </div>
      <div className="column">
        [new review form will go here]
      </div>
    </div>
  );
};

export default Airline;
