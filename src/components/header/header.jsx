import Link from "next/link";
import Button from "../button/button";
import Styles from "./header.module.scss";




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

