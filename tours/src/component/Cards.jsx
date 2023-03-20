import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ tours, removeItem }) => {
  return (
    <>
      {tours.map((tour) => {
        return (
          <Card
            key={tour.id}
            id={tour.id}
            removeItem={removeItem}
            image={tour.image}
            name={tour.name}
            price={tour.price}
            info={tour.info}
          />
        );
      })}
    </>
  );
};

export default Cards;
