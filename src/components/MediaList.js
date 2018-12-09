import React from 'react'

const MediaList = ({ title, item }) => {
  return (
    <div className="media-box image-frame">
      <h3>{title}</h3>
      {item.links 
        ? <img className="image-item" src={item.links[0].href} alt="noimage"/>
        : <p>{item.data[0].description}</p>}
    </div>
  )
}
export default MediaList;


