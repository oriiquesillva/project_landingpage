import Styles from "./footer.module.scss";

import { BsInstagram as Instagram} from "react-icons/bs";
import { BsWhatsapp as Whatsapp} from "react-icons/bs";
import { BsYoutube as Youtube} from "react-icons/bs";


export default function Footer() {
    return(
       <div className={Styles.container}>
        <div className={ `${Styles.footer_column} ${Styles.main_column}`}>
            <h1 className={Styles.logotipo}>JOTACOMVOCÊ</h1>
            <p>0800 800 800</p>
            <p>jottacomvoce@gmail.com</p>
        </div>
        <div className={Styles.footer_column}>
            <h2>MENU</h2>
            <p>Quem somos</p>
            <p>Cases</p>
        </div>
        <div className={Styles.footer_column}>
            <h2>CONTEUDO</h2>
            <p>E-books</p>
            <p>Artigos</p>
        </div>
        <div className={`${Styles.footer_column} ${Styles.align_right}`}>
            <h2>SOCIAL</h2>
            <div className={Styles.social_icons}>
                <Instagram/>
                <Whatsapp/>
                <Youtube/>
            </div>
        </div>
       </div>
    )
}