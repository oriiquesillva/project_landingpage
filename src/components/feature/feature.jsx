import Styles from "./feature.module.scss";
import FeatureCard from "../feature_card/feature_card";

import { LuMedal as Medal } from "react-icons/lu";
import { GiShipWheel as Wheel } from "react-icons/gi"
import { BsGraphUpArrow as Graph } from "react-icons/bs" ;
import { GiStrong as Strong } from "react-icons/gi";




export default function Feature() {
  return (
    <div className={Styles.container} id="about">
      <div className={Styles.text_container}>
        <h1>A Jornada do Empreendedor de Sucesso: Inscreva-se e Participe</h1>
        <p>
          Participe da palestra 'Jornada do Empreendedor de Sucesso' no dia
          07/07 e descubra as chaves para alcançar o sucesso empreendedor. Nesta
          palestra inspiradora e repleta de insights valiosos, você terá a
          oportunidade de aprender com histórias reais e experiências
          compartilhadas por empreendedores bem-sucedidos. Durante a palestra,
          exploraremos estratégias comprovadas, dicas práticas e conceitos-chave
          para ajudá-lo a trilhar seu próprio caminho rumo ao sucesso
          empreendedor, veja alguns tópicos que serão abordados na palestra:
        </p>
      </div>
      <div className={Styles.cards_container}>
        <FeatureCard
          icon={<Medal />}
          title={"Sucesso empreendedor"}
          text={`Descubra o segredo do empreendedor de sucesso: inspirado em histórias reais, trajetórias incríveis e a determinação de trilhar um caminho único para o sucesso.`}
        />
        <FeatureCard
          icon={<Wheel />}
          title={"Descobrindo seu talento"}
          text={`Descubra suas paixões, habilidades e interesses, e transforme-as em oportunidades de empreendedorismo. Aprenda a explorar diversos campos de atuação até encontrar um mercado que ressoe com você. `}
        />
        <FeatureCard
          icon={<Graph />}
          title={"Planejamento estratégico"}
          text={`Esse pilar é fundamental para impulsionar o crescimento e a vantagem competitiva. Seu sucesso depende do planejamento estratégico, da análise de mercado, da identificação do seu público-alvo, do modelo de negócio e da compreensão da concorrência.`}
        />
        <FeatureCard
          icon={<Strong />}
          title={"Perfil empreendedor"}
          text={`Desenvolva habilidades essenciais, utilize ferramentas para aprimorar suas habilidades empreendedoras e inspire-se em cases de sucesso para alcançar seus objetivos.`}
        />
      </div>
    </div>
  );
}
