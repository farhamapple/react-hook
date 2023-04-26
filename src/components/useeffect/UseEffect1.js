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

function UseEffect1() {
  const [text, setText] = useState("");
  const [fromLocalStorage, setLocalStorage] = useState("");

  const inputHandler = (e) => {
    setText(e.target.value);
  };

  // Use Effect Alwas Jdijalankan ketika ada state berubah
  useEffect(function () {
    console.log("Perubahan State");

    // Akan otomatis ter Push ke LocalStorage di Browser
    
   if (text.length) localStorage.setItem("edit-text", text);
  });

  // Use Effect dengan Array Kosong akan dijalankan ketika Component Di Render
  useEffect(function () {
    console.log("Use Effect dijalankan");
    console.log("Ambil data dari LocalStorage");

    setText(localStorage.getItem("edit-text"));
    setLocalStorage(localStorage.getItem("edit-text"));
  }, []);

  return (
    <Card color="info" style={{ paddingTop: "20px", marginTop: "10px" }}>
      <CardSubtitle className="text-center">
        <h1>Use Effect Mount</h1>
      </CardSubtitle>
      <CardBody>
        <p>
          useEffect yang dijalankan setiap kali state di Eksekusi, Ketika
          menulis form, useEffect akan jalan
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

export default UseEffect1;
