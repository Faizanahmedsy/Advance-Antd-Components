<Col xxl={3} xl={5} lg={5} md={6} sm={5} xs={3}>
  <Form.Item
    name={"countryCode"}
    //   label={"Country Code"}
    rules={[
      {
        validator: (rule, value) => {
          // Remove all non-numeric characters from the input value
          const numericValue = value.replace(/[^0-9]/g, "");

          // Check if the numeric value is either "1" or "91"
          if (numericValue === "1" || numericValue === "91") {
            return Promise.resolve();
          } else {
            return Promise.reject("Please enter either +1 or +91");
          }
        },
      },
    ]}
  >
    <Input
      type="text"
      placeholder="Enter Country Code"
      maxLength={3}
      minLength={2}
      // disabled
    />
  </Form.Item>
</Col>;
