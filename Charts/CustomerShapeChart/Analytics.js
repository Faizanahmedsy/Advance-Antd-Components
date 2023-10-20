import React from "react";
import RatingChart from "./RatingChart";

const Analytics = () => {
  const data = [
    {
      name: "January",
      iOS: 4.5,
      Android: 4.3,
    },
    {
      name: "February",
      iOS: 4.2,
      Android: 4.1,
    },
    {
      name: "March",
      iOS: 4.7,
      Android: 4.6,
    },
    {
      name: "April",
      iOS: 4.4,
      Android: 4.2,
    },
    {
      name: "May",
      iOS: 4.6,
      Android: 4.5,
    },
    {
      name: "June",
      iOS: 4.3,
      Android: 4.2,
    },
    {
      name: "July",
      iOS: 4.8,
      Android: 4.7,
    },
    {
      name: "August",
      iOS: 4.6,
      Android: 4.4,
    },
    {
      name: "September",
      iOS: 4.5,
      Android: 4.3,
    },
    {
      name: "October",
      iOS: 4.7,
      Android: 4.6,
    },
    {
      name: "November",
      iOS: 4.3,
      Android: 4.2,
    },
    {
      name: "December",
      iOS: 4.5,
      Android: 4.4,
    },
    // Add more data points as needed
  ];

  return (
    <div>
      {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
      <RatingChart title="iOS App Ratings" data={data} />
      <RatingChart title="Android App Ratings" data={data} />
      {/* </div> */}
    </div>
  );
};

export default Analytics;
