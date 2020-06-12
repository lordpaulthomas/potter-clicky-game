import React from 'react';

import './style.css';

const VictoryCard = () => {
  return (
    <div>
      <img
        src="https://media.giphy.com/media/qLHzYjlA2FW8g/giphy.gif"
        id="gif"
        className="card-img"
        alt="..."
      />
      <div className="card-img-overlay">
        <h1 id="winner" className="card-title text-center">
          You Won!!
        </h1>
        <h3 id="quote" className="card-text">
          "YOU'RE A WIZARD HARRY!!"
        </h3>
      </div>
    </div>
  );
};

export default VictoryCard;
