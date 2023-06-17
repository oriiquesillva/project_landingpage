"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Styles from "./carousel.module.scss";

import image1 from "../../../public/Images/palestra1.jpeg";
import image2 from "../../../public/Images/palestra2.jpeg";
import image3 from "../../../public/Images/palestra3.jpeg";
import image4 from "../../../public/Images/palestra4.jpeg";
import image5 from "../../../public/Images/palestra5.jpeg";
import image6 from "../../../public/Images/palestra6.jpeg";

const images = [image1, image2, image3, image4, image5, image6];

export default function Carousel() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.text_container}>
        <h1>Desperte a Liderança que muda o Jogo</h1>
        <p>
          Somos a JOTACOMVOCÊ uma empresa dedicada a formar líderes e despertar
          o potencial daqueles que ainda não se veem como líderes. Através de
          palestras e treinamentos, oferecemos ferramentas e conhecimentos para
          o desenvolvimento pessoal e profissional, com uma abordagem centrada
          nas pessoas e na gestão humanizada.
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
          {images.map((image, index) => (
            <div className={Styles.carousel_card} key={index}>
              <div className={Styles.carousel_img}>
                <Image src={image} alt="Foto do evento" />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
