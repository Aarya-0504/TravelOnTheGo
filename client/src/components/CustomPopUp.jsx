import React from 'react';

const CustomPopUp = ({ imageSrc, imageAlt, title,address }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={imageSrc} alt={imageAlt} width="800" />
      <h2>{address}</h2>
    </div>
  );
};

export default CustomPopUp;