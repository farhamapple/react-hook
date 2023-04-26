import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";

function UseState1() {
  const [counter, setCounter] = useState(0);
  const [food, setFood] = useState(["Nasi Goreng", "Mie Goreng"]);

  const counterHandler = () => {
    setCounter(counter + 1);
  };

  const addFoodHandler = () => {
    setFood([...food, "Kwetiaw"]);
  };

  return (
    <Row xs={2}>
      <Col
        className="bg-light border text-center"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <h1>Counter : {counter}</h1>
        <br />
        <Button color="primary" onClick={counterHandler}>
          +
        </Button>
      </Col>
      <Col
        className="bg-light border text-center"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <h1>Food </h1>
        <br />
        <ul>
          {food.map((foodItem) => (
            <li key={foodItem}>{foodItem}</li>
          ))}
        </ul>
        <br />
        <Button color="primary" onClick={addFoodHandler}>
          +
        </Button>
      </Col>
    </Row>
  );
}

export default UseState1;
