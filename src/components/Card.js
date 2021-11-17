import React from "react";
import "../style/global.css";

const Card = ({ title, classify, date }) => {
  return (
    <div className="w-full md:h-52 h-96 bg-white transition duration-300 shadow-sm hover:shadow-lg md:flex ">
      <div className="md:w-2/6 md:h-auto h-3/5"></div>
      <div className="md:w-4/6 w-full md:h-auto h-2/5 md:p-5 flex flex-col md:justify-between">
        <div className="md:h-1/4 h-1/4">
          <p className="md:text-4xl text-2xl truncate">{title}</p>
        </div>
        <div className="h-1/4 md:h-2/4">
          <p>asdasdasd</p>
        </div>
        <div className="md:flex h-1/2 md:h-1/4 md:justify-between items-center">
          <p className="text-lg">{classify}</p>
          <p className="text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
