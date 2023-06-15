"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Styles from "./carousel.module.scss";

import image1 from "../../../public/Images/palestra3.jpeg";
import image2 from "../../../public/Images/palestra3.jpeg";
import image3 from "../../../public/Images/palestra3.jpeg";
import image4 from "../../../public/Images/palestra3.jpeg";
import image5 from "../../../public/Images/palestra3.jpeg";
import image6 from "../../../public/Images/palestra3.jpeg";
import image7 from "../../../public/Images/palestra3.jpeg";
import image8 from "../../../public/Images/palestra3.jpeg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

export default function Carousel() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

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
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 150 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image) => (
            <div className={Styles.carousel_card} key={image}>
              <div className={Styles.carousel_img}>
                <Image src={image} />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
