import React from 'react'

import './AvatarCard.css'

const AvatarCard = ({name,img}) => {
  return (
    <article className="avatar-card">
      <div className="avatar">
        <img src={img} alt="Avatar icon" />
      </div>
      <div className="desc">
        <span>{name}</span>
      </div>
    </article>
  );
}

export default AvatarCard