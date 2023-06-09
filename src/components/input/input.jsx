import Styles from "./input.module.scss"



export default function Input({type, placeholder, pattern, required}) {
    return(
        <input className={Styles.custom_input}
        type = {type}
        placeholder = {placeholder}
        pattern = {pattern}
        required = {required}
        />
            

    )
}