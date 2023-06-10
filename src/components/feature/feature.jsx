import Styles from "./feature.module.scss";
import { VscGraph } from "react-icons/vsc";
import FeatureCard from "../feature_card/feature_card";

export default function Feature() {
  return (
    <div className={Styles.container}>
      <div className={Styles.text_container}>
      <h1>Neste bairro, não há agência melhor. Garantimos.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      </div>
      <div className={Styles.cards_container}>
        <FeatureCard
          icon={<VscGraph />}
          title={"Digital Strategy"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
          }
        />
        <FeatureCard
          icon={<VscGraph />}
          title={"Digital Strategy"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
          }
        />
        <FeatureCard
          icon={<VscGraph />}
          title={"Digital Strategy"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
          }
        />
        <FeatureCard
          icon={<VscGraph />}
          title={"Digital Strategy"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
          }
        />
      </div>
    </div>
  );
}
