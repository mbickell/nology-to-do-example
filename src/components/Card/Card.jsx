import React from "react";
import styles from "./Card.module.scss";

const Card = ({ name, description, startDate, endDate, image, deleteTodo, id }) => {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <span onClick={() => deleteTodo(id)}>X</span>
      <p>{description}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <img src={image} alt={`${name}`} />
    </div>
  );
};

export default Card;
