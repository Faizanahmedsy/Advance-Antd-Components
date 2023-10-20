import React from "react";
import { Card } from "antd";
import "./BeautifulCard.css"; // Custom CSS file for styling

const BeautifulCard = () => {
  return (
    <Card
      title="Beautiful Ant Design Card"
      extra={<a href="#">More</a>}
      style={{ width: 300, margin: "auto" }}
      cover={<img alt="example" src="https://via.placeholder.com/300" />}
      actions={[
        <a key="1" href="#">
          Action 1
        </a>,
        <a key="2" href="#">
          Action 2
        </a>,
      ]}
    >
      <p>
        This is a stunning Ant Design card that demonstrates the use of various
        attributes and custom styling for a visually appealing UI.
      </p>
      <p>
        You can add more content and customize the styles as per your
        requirements.
      </p>
    </Card>
  );
};

export default BeautifulCard;
