import React from 'react'

const Header = (props) => {
  const { name, image_url} = props.attributes;
  // const name = props.match.params.name
  // const image_url = props.image_url
  return(
    <div className="header">
      <img src={image_url} alt={name} width="50"/>
      <h1>{name}</h1>
    </div>
  )
}

export default Header;