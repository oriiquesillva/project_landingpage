"use client";
import { scrollTo } from "@/utils/scrollTo";
import Styles from "./footer.module.scss";

import { BsInstagram as Instagram } from "react-icons/bs";
import { BsWhatsapp as Whatsapp } from "react-icons/bs";
import { BsYoutube as Youtube } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={Styles.container}>
      <div className={`${Styles.footer_column} ${Styles.main_column}`} >
        <h1 className={Styles.logotipo} onClick={() => scrollTo("home")} >JOTACOMVOCÊ</h1>
        <span>jottacomvoce@gmail.com</span>
      </div>
      <div className={`${Styles.footer_column} ${Styles.dflex}`}>
        <span onClick={() => scrollTo("home")}>Home</span>
        <span onClick={() => scrollTo("carousel")}>O que fazemos</span>
        <span onClick={() => scrollTo("about")}>Sobre</span>
      </div>
      <div className={`${Styles.footer_column} ${Styles.dflex}`}>
        <Link href="https://instagram.com/jotacomvoce?igshid=MmIzYWVlNDQ5Yg==" target="_blank">
          <Instagram />
        </Link>
        <Link href="https://wa.me/message/4C7NU6WCGZRRO1" target="_blank">
          <Whatsapp />
        </Link>
        <Link href="https://www.youtube.com/@jotacomvoce" target="_blank">
          <Youtube />
        </Link>
      </div>
    </div>
  );
}
