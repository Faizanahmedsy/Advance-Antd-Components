<Form.Item
  name={"lastName"}
  label="Last Name"
  rules={[
    {
      required: true,
      message: "Please enter last name",
      pattern: new RegExp(/^[A-Za-z]+$/),
    },
  ]}
>
  <Input placeholder="Last Name" />
</Form.Item>;
