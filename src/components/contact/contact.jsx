"use client"
import axios from "axios";
import Button from "../button/button";
import Input from "../input/input";
import Styles from "./contact.module.scss";
import { useState } from "react";

export default function Contact() {
  const [nome, setNome] = useState(null)
  const [email, setEmail] = useState(null)
  const [telefone, setTelefone] = useState(null)

  console.log(nome, email, telefone);


  const SendMail = () => {
    axios
      .post("/api/", {message_data: `Nome: ${nome}, Email: ${email}, Telefone: ${telefone} `})
      .then(() => console.log("uhull"))
      .catch(() => console.log("Ooops"));
  };

  
  return (
    <div className={Styles.container}>
      <div className={Styles.text_container}>
        <h1>Não perca tempo e garanta sua vaga</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
      </div>
      <div className={Styles.form_container}>
        <h1>Inscreva-se</h1>
        <form>
          <Input
           type="text" 
           placeholder="Nome completo" 
           onBlur={(e) => setNome(e.target.value)}
           required 
           />

          <Input
           type="email" 
           placeholder="Digite seu email" 
           onBlur={(e) => setEmail(e.target.value)}
           required 
           />

          <Input
            type="text"
            placeholder="Celular / Whatsapp"
            onBlur={(e) => setTelefone(e.target.value)}
            required
          />
          <Button title={"Garanta sua vaga"} kind={"full"} onClick={SendMail} />
        </form>
      </div>
    </div>
  );
}
