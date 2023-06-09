import Image from "next/image";
import Link from "next/link";
import Styles from "./header.module.scss";
import Button from "../button/button";



export default function Header() {
  return (
    <div className={Styles.container}>
      <a className={Styles.logotipo}>
        JOTACOMVOCÊ
      </a>
      <div className={Styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/">O que fazemos</Link>
        <Link href="/">Cases</Link>
      </div>
      <div className={Styles.action}>
        <Button title={"FALE CONOSCO"}/>
      </div>
    </div>
  );
};

