<Form.Item
  name={"subTotal"}
  label="Subtotal ($)"
  rules={[
    {
      required: true,
      message: "Only numbers and decimals up to two places allowed",
      pattern: new RegExp(/^\d+(\.\d{0,2})?$/),
      // pattern: new RegExp(/^\d+(\.\d{1,2})?$/),
    },
  ]}
  onKeyPress={(event) => {
    const charCode = event.charCode;
    if (
      (charCode < 48 || charCode > 57) && // Allow digits 0-9
      (charCode !== 46 || event.target.value.includes(".")) && // Allow the decimal point only if it's not already present
      charCode !== 8 // Allow backspace
    ) {
      event.preventDefault();
    }
  }}
>
  <Input placeholder="Enter Subtotal" onChange={(value) => {}} />
</Form.Item>;
