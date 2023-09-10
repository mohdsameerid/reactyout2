import React from "react";

const ShimmerUI = () => {
  return (
    <div>
      {Array(15)
        .fill("")
        .map((items) => {
          return <div className="shimmer-UI"></div>;
        })}
    </div>
  );
};
export default ShimmerUI;
