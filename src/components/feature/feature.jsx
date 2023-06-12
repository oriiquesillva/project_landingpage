import Styles from "./feature.module.scss";
import { VscGraph as Graph } from "react-icons/vsc";
import { GiSwordsPower as Power } from "react-icons/gi";
import { GiGrowth as Growing } from "react-icons/gi"
import { GiStrong as Strong } from "react-icons/gi"
import FeatureCard from "../feature_card/feature_card";

export default function Feature() {
  return (
    <div className={Styles.container}>
      <div className={Styles.text_container}>
        <h1>
          Garanta sua vaga e participe da 1ª palestra sobre liderança e gestão
          humanizada
        </h1>
        <p>
          A liderança humanizada é um conceito que ganhou força desde que o
          mundo se viu fragilizado diante dos impactos da pandemia. Como era de
          se esperar, o ambiente empresarial também sentiu os efeitos, não só
          por causa das oscilações econômicas, mas também pelo impacto sentido
          pelas pessoas nesse cenário, diante desse quadro vamos aprender:
        </p>
      </div>
      <div className={Styles.cards_container}>
        <FeatureCard
          icon={<Power />}
          title={"Engajamento e empoderamento"}
          text={`No contexto profissional, por exemplo, esses temas tem o potencial de motivar a equipe. Um líder que acredita nisso e delega responsabilidades costuma despertar
            nos seus liderados o espírito colaborativo.`}
        />
        <FeatureCard
          icon={<Growing />}
          title={"Desenvolvimento pessoal"}
          text={
            `Processo constante e progressivo, que exige investimento de tempo e de energia. Não acontece do dia para a noite mas 
            quando alcançado, o retorno extremamente benéfico.`
          }
        />
        <FeatureCard
          icon={<Strong />}
          title={"Fortalecimento da marca"}
          text={
            `O tempo em que uma boa empresa era medida somente por seus resultados já passou. Hoje, a cultura organizacional e as relações de trabalho,
            também são fatores de extrema importância durante a avaliação de qualquer negócio.`
          }
        />
        <FeatureCard
          icon={<Graph />}
          title={"Melhorar produtividade"}
          text={
            `O maior ganho que uma empresa pode ter após adotar uma gestão humanitária é o aumento da produtividade.
            Afinal, com boas condições de trabalho e níveis elevados de satisfação, os liderados se sentem mais motivados 
            a trabalhar.`
          }
        />
      </div>
    </div>
  );
}
