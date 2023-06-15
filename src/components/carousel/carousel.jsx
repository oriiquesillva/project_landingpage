"use client"

import Styles from "./carousel.module.scss";
import { motion } from "framer-motion";
import CarouselCard from "../carousel_card/carousel_card";
import { useState, useRef, useEffect} from "react"

export default function Carousel() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth )
  },[])


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
      <motion.div
        className={Styles.carousel_wrapper}
        whileTap={{ cursor: "grabbing" }}
        ref={carousel}

      >
        <motion.div
          className={Styles.carousel_content}
          drag="x"
          dragConstraints={{right: 0 , left: -width}}
          initial={{x: 150}}
          animate={{x: 0}}
          transition={{duration: 0.8}}
        >
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
        </motion.div>
      </motion.div>
    </div>
  );
}
