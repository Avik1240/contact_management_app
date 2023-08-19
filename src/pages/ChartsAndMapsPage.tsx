import React from "react";
import LineGraph from "../components/LineGraph";

const ChartAndMapsPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center my-6 font-bold text-lg">
          Charts & Maps Page
        </h1>
        <div className="w-[1000px]">
          <LineGraph />
        </div>
      </div>
    </>
  );
};

export default ChartAndMapsPage;
