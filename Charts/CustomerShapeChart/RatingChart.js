import React from "react";
import { Card } from "antd";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const { Meta } = Card;

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const RatingChart = ({ title, data }) => {
  return (
    <Card title={title} style={{ margin: "20px" }}>
      <BarChart
        width={950}
        height={200}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="iOS"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
        <Bar
          dataKey="Android"
          fill="#82ca9d"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </Card>
  );
};

export default RatingChart;

// export default function App() {
//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <RatingChart title="iOS App Ratings" data={data} />
//       <RatingChart title="Android App Ratings" data={data} />
//     </div>
//   );
// }
