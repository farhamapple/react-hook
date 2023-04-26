import React from "react";
import { Link } from "react-router-dom";

import "../css/General.module.css";
import { Container } from "reactstrap";

function LandingPage() {
  return (
    <Container>
      <Link to="/use-state">Use State Contoh</Link>
      <br />
      <Link to="/use-effect">Use Effect Example</Link>
    </Container>
  );
}

export default LandingPage;
