import React from 'react';
import { Link } from 'react-router-dom';

const MediaList = ({ title, item }) => {
  return (
    <div className="media-box image-frame">
      <h3>{title}</h3>
      {item.links 
        ? <img className="image-item" src={item.links[0].href} alt="noimage"/>
        : <p>{item.data[0].description}</p>}
        <br></br>
        <Link to={`/asset/${item.data[0].nasa_id}`}>Read more</Link>
    </div>
  )
}
export default MediaList;


