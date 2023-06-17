import Styles from "./input.module.scss"



export default function Input({id, name, type, value, placeholder, pattern, required, onBlur, onChange}) {
    return(
        <input className={Styles.custom_input}
        id={id}
        name={name}
        type = {type}
        value={value}
        placeholder = {placeholder}
        pattern = {pattern}
        required = {required}
        onBlur={onBlur}
        onChange={onChange}
        />
            

    )
}