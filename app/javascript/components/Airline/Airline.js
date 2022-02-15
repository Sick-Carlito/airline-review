import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Review from "./Review";
import styled from "styled-components";
import ReviewForm from './ReviewForm'

const Column = styled.div`
  background: #fff;
  max-width: 50%;
  width: 50%;
  float: left;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll;
  overflow: scroll;
`;

const Header1 = styled.div`
  padding: 100px 100px 10px 100px;
  font-size: 30px;
  text-align: center;
`;

const Airline = (props) => {
  //  const slug = props.match.params.slug

  //  console.log(slug)

  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = "/api/v1/airlines/" + slug;

    axios
      .get(url)
      .then((resp) => {
        setAirline(resp.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);

  // {loaded && (

  //   console.log('airline-included', airline.included.length)

  //   )}

  let reviews;
  if (loaded && airline.included.length > 0) {
    reviews = airline.included.map((review, index) => {
      return (
        <Review
          key={index}
          title={review.attributes.title}
          description={review.attributes.description}
          score={review.attributes.score}
        />
      );
    });
  }

  return (
    <div>
      <Column>
        {loaded && (
          <Header1>
            <Header attributes={airline.data.attributes} />
          </Header1>
        )}

        <div className="reviews">{reviews}</div>
      </Column>

      <Column>
        <ReviewForm
          name={name}
          review={review}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
          setRating={props.setRating}
        />
      </Column>
    </div>
  );
};

export default Airline;
