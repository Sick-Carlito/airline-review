import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'



const Airline = (props) => {
  
//  const slug = props.match.params.slug

//  console.log(slug)

  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})



   useEffect( () => {
    const slug = props.match.params.slug
    const url = '/api/v1/airlines/' + slug

    

    axios.get(url)
    .then( (resp) => {
      console.log('data', resp)
    })
    .catch( data => {
      debugger
    })
    
  }, [])

  return(
    <div>This is the Airlines#show page for our app.</div>
  )
}

export default Airline;