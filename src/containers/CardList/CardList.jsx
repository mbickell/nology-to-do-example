import React from "react";
import styles from "./CardList.module.scss";

import Card from "../../components/Card";

const CardList = ({ data, deleteTodo }) => {
  return (
    <div className={styles.cardList}>
      {data.map(datum => {
        return (
          <Card
            name={datum.name}
            description={datum.description}
            startDate={datum.startDate}
            endDate={datum.endDate}
            image={datum.image}
            key={datum.id}
            id={datum.id}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default CardList;
