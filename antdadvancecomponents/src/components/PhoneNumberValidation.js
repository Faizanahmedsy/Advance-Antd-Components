<Form.Item
  name={"phoneNumber"}
  rules={[
    {
      validator: (rule, value) => {
        if (value && value.replace(/[^0-9]/g, "").length !== 10) {
          return Promise.reject("Please enter a 10-digit phone number");
        }
        return Promise.resolve();
      },
    },
  ]}
>
  <Input
    placeholder="Phone Number"
    minLength={10}
    maxLength={10}
    autoComplete="off"
    type="tel"
    onKeyPress={(event) => {
      if (event.charCode < 48 || event.charCode > 57) {
        event.preventDefault();
      }
    }}
  />
</Form.Item>;
