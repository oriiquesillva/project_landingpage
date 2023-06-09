import Styles from "./feature_card.module.scss";


export default function FeatureCard({icon, title, text}) {
    return(
        <div className={Styles.container}>
            {icon}
            <div className={Styles.text_container}>
            <h1>{title}</h1>
            <p>{text}</p>
            </div>
        </div>
    )
}