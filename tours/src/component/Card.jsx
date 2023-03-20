import React, { useState } from "react";

const Card = ({ id, image, name, price, info, removeItem }) => {
  const [readMore, setReadMore] = useState(false);

  const switchReadMore = (e) => {
    setReadMore((prevS) => !prevS);
  };
  return (
    <div className="card w-1/2 m-auto rounded-lg shadow-2xl mb-5 pb-5 text-center">
      <img
        src={image}
        alt={name}
        className="h-80 object-cover w-full rounded-t-lg"
      />
      <div className="title flex justify-between pt-10 pl-10 pr-10 pb-3 ">
        <h4 className="font-bold">{name}</h4>
        <p className="text-cyan-500 font-bold">${price}</p>
      </div>
      <p className="p-5">
        {readMore ? info : info.slice(0, 150)}
        {readMore ? (
          <span>
            {" "}
            <span
              onClick={switchReadMore}
              className="cursor-pointer text-cyan-500"
            >
              Read Less
            </span>
          </span>
        ) : (
          <span>
            ...{" "}
            <span
              onClick={switchReadMore}
              className="cursor-pointer text-cyan-500"
            >
              Read More
            </span>
          </span>
        )}
      </p>
      <button
        className="text-red-600 border-solid border border-red-600 rounded-md pt-1 pb-1 pl-20 pr-20"
        onClick={() => removeItem(id)}
      >
        Not Interested
      </button>
    </div>
  );
};

export default Card;
