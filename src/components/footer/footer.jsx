import Styles from "./footer.module.scss";

import { BsInstagram as Instagram} from "react-icons/bs";
import { BsWhatsapp as Whatsapp} from "react-icons/bs";
import { BsYoutube as Youtube} from "react-icons/bs";


export default function Footer() {
    return(
       <div className={Styles.container}>
        <div className={ `${Styles.footer_column} ${Styles.main_column}`}>
            <h1 className={Styles.logotipo}>JOTACOMVOCÊ</h1>
            <p>jottacomvoce@gmail.com</p>
        </div>
        <div className={ `${Styles.footer_column} ${Styles.dflex}`}>
            <p>Home</p>
            <p>Quem somos</p>
            <p>Cases</p>
        </div>
        <div className={`${Styles.footer_column} ${Styles.dflex}`}>
                <Instagram/>
                <Whatsapp/>
                <Youtube/>
        </div>
       </div>
    )
}