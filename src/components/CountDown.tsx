import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const [shouldRender, setShouldRender] = useState(false);

  const endingDate = new Date("2023-07-29");

  useEffect(() => {
    setShouldRender(true);
  }, []);

  return shouldRender ? (
    <Countdown
      className="font-bold text-5xl text-yellow-300"
      date={endingDate}
    />
  ) : null;
};

export default CountDown;

// import React from "react";
// import Countdown from "react-countdown";

// const endingDate = new Date("2023-07-29");

// const CountDown = () => {
//   return (
//     <div className="font-bold text-5xl text-yellow-300">
//       <Countdown date={endingDate} />;
//     </div>
//   );
// };

// export default CountDown;
