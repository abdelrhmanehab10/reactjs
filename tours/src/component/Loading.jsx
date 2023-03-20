import React from "react";

const Loading = () => {
  return (
    <div className="loading flex ml-36">
      <div className="dot text-9xl animate-bounce">.</div>
      <div className="dot text-9xl animate-bounce">.</div>
      <div className="dot text-9xl animate-bounce">.</div>
    </div>
  );
};

export default Loading;
