{
  shopNameLoaderInModal && (
    <Select.Option value="loading" style={{ cursor: "none" }} disabled>
      <Spin />
    </Select.Option>
  );
}
