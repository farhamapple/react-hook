import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

function UseEffect3() {
  const [text, setText] = useState("");
  const [fromLocalStorage, setLocalStorage] = useState("");
  const [seconds, setSeconds] = useState(0);

  const inputHandler = (e) => {
    setText(e.target.value);
  };

  // Use Effect Alwas Jdijalankan ketika ada state berubah
  useEffect(function () {
    console.log("Perubahan State");

    // Akan otomatis ter Push ke LocalStorage di Browser
    if (text.length) localStorage.setItem("edit-text-use-effect3", text);
  }, [text]);

  // Use Effect dengan Array Kosong akan dijalankan ketika Component Di Render
  useEffect(function () {
    console.log("Use Effect dijalankan");
    console.log("Ambil data dari LocalStorage");

    setText(localStorage.getItem("edit-text-use-effect3"));
    setLocalStorage(localStorage.getItem("edit-text-use-effect3"));

    let intervalID = setInterval(() => {
        setSeconds( second => second + 1 );
    }, 1000)

    return function(){
        clearInterval(intervalID);
    }
  }, []);

  return (
    <Card color="light" style={{ paddingTop: "20px", marginTop: "10px" }}>
      <CardSubtitle className="text-center">
        <h1>Use Effect Clean Up function</h1>
      </CardSubtitle>
      <CardBody>
        <p>Ketika berpindah halaman, akan terjadi memory leak yang di sebabkan interval akan berjadlan setiap detiknya</p>
        <p>
          Waktu : {Math.floor(seconds / 60)} Menit {seconds % 60} Detik
        </p>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="text"
              value={text}
              onChange={inputHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label>State Text : {text}</Label>
          </FormGroup>
          <FormGroup>
            <Label>State from Local Storage : {fromLocalStorage}</Label>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
}

export default UseEffect3;
