"use client"

import Styles from "./welcome.module.scss";
import Button from "../button/button";
import Profile from "../../../public/Images/profile.jpeg";
import Image from "next/image";
import { scrollTo } from "@/utils/scrollTo";

export default function Welcome() {
  return (
    <div className={Styles.container} >
      <div className={Styles.text_container}>
        <h1>Liderança que transcende o jogo</h1>
        <p>
          Eu sou Jota, supervisor em uma multinacional e ex-atleta de futebol
          estadual. Lidero líderes há mais de 6 anos e meu objetivo é treinar e
          capacitar aqueles que desejam alcançar a posição de liderança.
          Compartilho minha experiência e expertise, baseado em valores sólidos
          e empatia genuína. Além disso, tenho um compromisso com causas sociais
          voltadas ao combate à fome.
        </p>
        <div className={Styles.action}>
          <Button title="INSCREVA-SE" kind="secundary" onClick={() => scrollTo("contact")} />
        </div>
      </div>
      <div className={Styles.image_container}>
        <div className={Styles.image_content}>
          <Image src={Profile} alt="Profile Image" />
        </div>
      </div>
    </div>
  );
}
