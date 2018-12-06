import React from 'react'

const MediaList = ({ title, image }) => {
  return (
    <div className="media-box image-frame">
      <h3>Title: {title}</h3>
      <img className="image-item" src={image} alt="display"/>
    </div>
  )
}
export default MediaList;


