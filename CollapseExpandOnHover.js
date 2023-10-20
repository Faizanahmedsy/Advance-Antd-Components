<Collapse
  defaultActiveKey={["1"]}
  accordion
  style={{ background: "#a5dbff", borderRadius: "14px" }}
>
  <Panel
    header={
      <span
        style={{
          fontWeight: "bold",
          fontSize: "17px",
        }}
      >
        Terms and Warranty
      </span>
    }
    key={"1"}
  >
    <Row gutter={12}>
      <Col md={24}>
        <Collapse
          activeKey={activeKey}
          onChange={(activeKeys) => setActiveKey(activeKeys[0])}
        >
          <Panel
            header={"Hover Panel 1"}
            onMouseEnter={() => setActiveKey("1")}
            onMouseLeave={() => setActiveKey(" ")}
            key="1"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            tempore ratione excepturi veniam sed tempora quia ab cumque autem
            perspiciatis!
          </Panel>
          {/* </Collapse> */}
          {/* <Collapse> */}
          <Panel
            header={"Hover Panel 2"}
            key="2"
            onMouseEnter={() => setActiveKey("2")}
            onMouseLeave={() => setActiveKey(" ")}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            tempore ratione excepturi veniam sed tempora quia ab cumque autem
            perspiciatis!
          </Panel>
        </Collapse>
      </Col>
    </Row>
  </Panel>
</Collapse>;
