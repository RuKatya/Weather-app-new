import React from "react";

const NoData = ({ theme }) => {
  return (
    <div
      className="weaterMain"
      style={{
        backgroundColor:
          theme === "dark"
            ? "rgba(15, 15, 15, 0.561)"
            : "rgba(226, 226, 226, 0.9)",
        color: theme === "dark" ? "white" : "rgb(49, 49, 49)",
        textShadow:
          theme === "dark"
            ? "0px 0px 10px black"
            : "0px 0px 10px rgb(197, 195, 195)",
      }}
    >
      <div
        className="err"
        style={{
          color: theme === "dark" ? "rgb(255, 209, 59)" : "rgb(59, 85, 255)",
        }}
      >
        <p style={{ fontSize: "1.3rem" }}>Something get wrong.</p>
        <p>Try again.</p>
      </div>
    </div>
  );
};

export default NoData;
