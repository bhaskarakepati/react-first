import React from "react";
import "./card.styles.css";

export const Card = prop => (
  <div className="card-container">
    <img
      alt="monster"
      src={"https://robohash.org/4?set=set2&size=180x180"}
    ></img>
    <h2>{prop.monster.name}</h2>
    <p>{prop.monster.email}</p>
  </div>
);
