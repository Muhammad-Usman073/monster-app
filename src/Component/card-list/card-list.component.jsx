import React from "react";
import "./card-list.styles.css";
import CardComponent from "../card/card-component";
const CardList = (props) => {
  const { monster } = props;
  return (
    <div className="card-list">
      {monster.map((newValue) => {
        return <CardComponent value={newValue} />;
      })}
    </div>
  );
};
export default CardList;
