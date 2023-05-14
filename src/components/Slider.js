import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import styles from "../styles/components/Slider.module.css";
import { sliderItems } from "../data/db";
import { useState } from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setIndex(index > 0 ? index - 1 : 2);
    } else {
      setIndex(index < 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.arrow} ${styles.left}`}
        direction="left"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlinedIcon />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${index * -100}vw)` }}
      >
        {sliderItems.map((item) => (
          <div className={styles.slide} key={item.id}>
            <div className={styles.imageContainer}>
              <img src={item.img} className={styles.image} />
            </div>
            <div className={styles.infoContainer}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <button className={styles.button}>Shop Now!</button>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`${styles.arrow} ${styles.right}`}
        direction="left"
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
