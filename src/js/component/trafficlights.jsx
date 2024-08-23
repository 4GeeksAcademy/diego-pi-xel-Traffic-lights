import React, { useState } from "react";

export const Trafficlight = () => {
  const [light, setLight] = useState("");

  return (
    <div className="TrafficLight">
      <div
        onClick={() => setLight("glow-red")}
        className={`light bg-danger ${light === "glow-red" ? "glow-red" : ""}`}
      ></div>
      <div
        onClick={() => setLight("glow-yellow")}
        className={`light bg-warning ${light === "glow-yellow" ? "glow-yellow" : ""}`}
      ></div>
      <div
        onClick={() => setLight("glow-green")}
        className={`light bg-success ${light === "glow-green" ? "glow-green" : ""}`}
      ></div>
    </div>
  );
};
