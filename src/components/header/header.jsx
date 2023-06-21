"use client"

import Styles from "./header.module.scss";
import { scrollTo } from "@/utils/scrollTo";




export default function Header() {
  return (
    <div className={Styles.container} id="home">
      <a className={Styles.logotipo}>
        JOTACOMVOCÊ
      </a>
      <div className={Styles.menu}>
        <span onClick={() => scrollTo("home")}>Home</span>
        <span onClick={() => scrollTo("carousel")}>O que fazemos</span>
        <span onClick={() => scrollTo("about")}>Sobre</span>
      </div>
    </div>
  );
};

