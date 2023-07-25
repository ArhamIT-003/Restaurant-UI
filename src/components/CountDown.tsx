import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2023-07-29");

const CountDown = () => {
  return (
    <div className="font-bold text-5xl text-yellow-300">
      <Countdown date={endingDate} />;
    </div>
  );
};

export default CountDown;
