import React from 'react'
import Rating from '../Rating/Rating'

const Header = (props) => {
  const { name, image_url, avg_score} = props.attributes;
  // const name = props.match.params.name
  // const image_url = props.image_url
  return(
    <div className="header">
      <img src={image_url} alt={name} width="50"/>
      <h1>{name}</h1>
      <Rating score={avg_score}/>
    </div>
  )
}

export default Header;