import React from "react";
import { Col, Container, Row } from "reactstrap";
import UseEffect1 from "../components/useeffect/UseEffect1";
import UseEffect2 from "../components/useeffect/UseEffect2";
import UseEffect3 from "../components/useeffect/UseEffect3";

function UseEffectPage() {
  return (
    <Container>
      <Row>
        <Col xl="6">
          <UseEffect1 />
        </Col>
        <Col xl="6">
          <UseEffect2/>
        </Col>
      </Row>
      <Row>
        <Col xl="6">
          <UseEffect3 />
        </Col>
      </Row>
    </Container>
  );
}

export default UseEffectPage;
