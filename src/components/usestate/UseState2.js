import React, { useState } from "react";

import { Button, Col, Row } from "reactstrap";

function UseState2() {

  const [ state, setState ] = useState(
    {
        counter : 0,
        food : ['Nasi Goreng', 'Mie Goreng']
    }
  )

  const counterHandler = () => {
        setState({
            ...state,
            counter : state.counter + 1
        })
  }

  const addFoodHandler = () => {
    setState({
        ...state,
        counter : state.counter + 1,
        //food : state.food.push(...food, ['Kwetiaw'])
    })
  }


  return (
    <Row xs={2}>
      <Col
        className="bg-light border text-center"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <h1>Counter : {state.counter}</h1>
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
          {state.food.map((foodItem, index) => (
            <li key={index}>{foodItem}</li>
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

export default UseState2;
