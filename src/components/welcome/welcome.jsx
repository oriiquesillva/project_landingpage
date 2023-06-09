import Styles from "./welcome.module.scss";
import Button from "../button/button";
import BannerWelcome from "/public/images/hero-img.svg";
import Image from "next/image";


export default function Welcome() {
  return (
    <div className={Styles.container}>
      <div className={Styles.text_container}>
        <h1>Melhor agência de marketing do bairro</h1>
        <p>
          Somos uma agência de performance digital, aceleramos vendas e
          aquisição de leads para grandes marcas.
        </p>
        <Button
          title="AUMENTAR VENDAS"
          kind="secundary"
        />
      </div>
      <div className={Styles.image_container}>
        <Image src={BannerWelcome} alt="Banner Welcome" />
      </div>
    </div>
  );
};

