import React from "react";
import "./style.css";

const LoserCard = () => {
  return (
    <div>
      <div className='fluid'>
        <div className="bg-dark text-white">
          <img src="https://media.giphy.com/media/4Pcf0yfcGUNgY/giphy.gif"
            id="gif"
            className="card-img"
            alt="..." />
          <div className="card-img-overlay">
            <h1 id="loser" className="card-title text-center">You Lose!!</h1>
            <h3 id="quote2" className="card-text">"The boy who lived, come to die!!"</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoserCard