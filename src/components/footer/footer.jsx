"use client"
import { scrollTo } from "@/utils/scrollTo";
import Styles from "./footer.module.scss";

import { BsInstagram as Instagram} from "react-icons/bs";
import { BsWhatsapp as Whatsapp} from "react-icons/bs";
import { BsYoutube as Youtube} from "react-icons/bs";


export default function Footer() {
    return(
       <div className={Styles.container}>
        <div className={ `${Styles.footer_column} ${Styles.main_column}`}>
            <h1 className={Styles.logotipo}>JOTACOMVOCÊ</h1>
            <span>jottacomvoce@gmail.com</span>
        </div>
        <div className={ `${Styles.footer_column} ${Styles.dflex}`}>
            <span onClick={() => scrollTo("home")}>Home</span>
            <span onClick={() => scrollTo("carousel")}>O que fazemos</span>
            <span onClick={() => scrollTo("about")}>Sobre</span>
        </div>
        <div className={`${Styles.footer_column} ${Styles.dflex}`}>
                <Instagram/>
                <Whatsapp/>
                <Youtube/>
        </div>
       </div>
    )
}