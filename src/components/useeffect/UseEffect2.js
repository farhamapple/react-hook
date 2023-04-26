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

function UseEffect2() {
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
    if (text.length) localStorage.setItem("edit-text-use-effect2", text);
  }, [text]);

  // Use Effect dengan Array Kosong akan dijalankan ketika Component Di Render
  useEffect(function () {
    console.log("Use Effect dijalankan");
    console.log("Ambil data dari LocalStorage");

    setText(localStorage.getItem("edit-text-use-effect2"));
    setLocalStorage(localStorage.getItem("edit-text-use-effect2"));

    setInterval(() => {
        setSeconds( second => second + 1 );
    }, 1000)
  }, []);

  return (
    <Card color="success" style={{ paddingTop: "20px", marginTop: "10px" }}>
      <CardSubtitle className="text-center">
        <h1>Use Effect Depedencies</h1>
      </CardSubtitle>
      <CardBody>
        <p>useEffect yang dijalankan setiap kali ada state yang di trigger, walaupun detiknya berjalan, tetapi useEffect yang pertama tidak di eksekusi dikarenakan ditambahkan depedencies state ( text ) untuk perubahan</p>
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
            <Label>{text}</Label>
          </FormGroup>
          <FormGroup>
            <Label>{fromLocalStorage}</Label>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
}

export default UseEffect2;
