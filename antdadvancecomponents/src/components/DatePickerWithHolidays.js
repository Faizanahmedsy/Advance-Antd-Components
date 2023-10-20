import React, { useState } from "react";
import { Form, DatePicker } from "antd";
import moment from "moment";

const MyDatePicker = () => {
  const [dropOffDate, setDropOffDate] = useState(null);

  const holidayDates = ["2023-09-10", "2023-09-25", "2023-10-05"];

  const isHoliday = (current) => {
    const formattedCurrentDate = current.format("YYYY-MM-DD");
    return holidayDates.includes(formattedCurrentDate);
  };

  const disabledDate = (current) => {
    const formattedCurrentDate = current.format("YYYY-MM-DD");
    const isBeforeOneDayAgo = moment()
      .add(-1, "days")
      .isSameOrBefore(current, "day");
    const isAfterOneMonthAhead = moment()
      .add(1, "month")
      .isSameOrAfter(current, "day");
    return isHoliday(current) || !isBeforeOneDayAgo || !isAfterOneMonthAhead;
  };

  return (
    <Form.Item
      name={"appointmentDroppedOffDate"}
      label="Appointment Drop Off Date"
      rules={[
        {
          required: true,
          message: "Please select a date",
        },
      ]}
    >
      <DatePicker
        placeholder="Select Date"
        style={{ width: "100%" }}
        disabledDate={disabledDate}
        dateRender={(current) => {
          const style = {};
          if (disabledDate(current)) {
            style.color = "#FF0000"; // Red text color for disabled dates
          }
          return (
            <div className="ant-picker-cell-inner" style={style}>
              {current.date()}
            </div>
          );
        }}
        onChange={(date, dateString) => setDropOffDate(dateString)}
      />
    </Form.Item>
  );
};

export default MyDatePicker;
