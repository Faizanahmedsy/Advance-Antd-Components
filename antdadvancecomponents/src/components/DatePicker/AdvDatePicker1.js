<DatePicker
  allowClear={false}
  placeholder="Select Date"
  style={{ width: "100%" }}
  // disabledDate={disabledDate}
  showToday={false}
  renderExtraFooter={() => (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        display: dropOffDateLoading ? "flex" : "none",
      }}
    >
      <Spin />
      {"  Fetching Available Drop Off Dates"}
    </div>
  )}
  disabledDate={(current) => {
    if (!selectedShop || dropOffDateLoading) {
      return true;
    }
    const currentDate = dayjs(current);
    // Disable all dates before today
    if (currentDate.isBefore(dayjs(), "day")) {
      return true;
    }
    const holidays = [];
    Array.isArray(dropOffDates) &&
      dropOffDates.map((holiday) => {
        // console.log("holiday", holiday);
        if (!holiday.isAvailable) holidays.push(holiday.date);
      });
    const formattedCurrentDate = currentDate.format("YYYY-MM-DD");
    return holidays.includes(formattedCurrentDate);
  }}
  dateRender={(current) => {
    const holidays = [];

    Array.isArray(dropOffDates) &&
      dropOffDates.map((holiday) => {
        // console.log("holiday", holiday);
        if (holiday.isAvailable) holidays.push(holiday.date);
      });

    const customDate = current.format("YYYY-MM-DD");
    const isCustomDate = holidays.includes(customDate);
    const style = {};

    if (isCustomDate) {
      style.color = "white";
      style.background = "blue";
      style.borderRadius = "50%";
    }

    return (
      <div
        //  className={`custom-date ${isCustomDate ? 'highlighted' : ''}`}
        className="ant-picker-cell-inner"
        style={style}
      >
        {current.date()}
      </div>
    );
  }}
  onChange={(date, dateString) => {
    // console.log("dateString", dateString);
    // setAppointmentDate(dateString);
    fetchDropOffTimes({
      shopId: selectedShop,
      date: dateString,
    });
    form.setFieldsValue({
      dropOffDateTime: null,
    });
  }}
  onPanelChange={(value) => {
    setDropOffDates([]);
    setSelectedMonthYear([value.$M + 1, value?.$y]);
    if (selectedShop) {
      fetchDropOffDates({
        shopId: selectedShop,
        month: value.$M + 1,
        year: value?.$y,
      });
      // console.log(
      //   "valerr",
      //   value,
      //   moment(value).get(),
      //   moment(value).year()
      //   );
    }
  }}
/>;
