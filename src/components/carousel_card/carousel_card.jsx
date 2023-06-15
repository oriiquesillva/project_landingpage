import Styles from "./carousel_card.module.scss";


export default function CarouselCard({img}) {
  return (
    <div className={Styles.container}>
      <div className={Styles.carousel_img}>
        <img src={img}/>
      </div>
    </div>
  );
}
