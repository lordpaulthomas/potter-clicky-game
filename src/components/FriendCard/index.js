import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="col-lg-3">
      <div className="card">
        <div className="img-container" key={props.id}onClick={() => props.handleClick(props.name)}>
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
