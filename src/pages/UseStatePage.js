
import {  Container} from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import UseState1 from "../components/usestate/UseState1";
import UseState2 from "../components/usestate/UseState2";

function UseStatePage(){

  

    return <Container className="pt-10">
       <UseState1 />
       <br />
       <UseState2 />
    </Container>

}

export default UseStatePage