import Button from "../button/button"
import Input from "../input/input"
import Styles from "./contact.module.scss"




export default function Contact() {
    return(
        <div className={Styles.container}>
            <div className={Styles.text_container}>
                <span>ENTRE EM CONTATO</span>
                <h1>Aumente seu resultado de vendas e performance</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
            <div className={Styles.form_container}>
                <h1>Fale com o Jotta</h1>
                <form>
                    <Input
                     type="text" 
                     placeholder="Nome completo" 
                     required
                     />
                    <Input 
                    type="email"
                     placeholder="Digite seu email" 
                     required
                     />
                    <Input type="text"
                     placeholder="Celular / Whatsapp"
                     pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                     required
                     />
                     <Button title={"Garanta sua vaga"} kind={"full"}/>
                </form>                
            </div>
        </div>
    )
}