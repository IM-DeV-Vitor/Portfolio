import styles from "../styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import { GiBrazil } from "react-icons/gi";

export default function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  const phrases = [
    "Backend Developer",
    "Front End Developer",
    "FullStack Developer",
    "A Complete Web Developer.",
  ];

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(current.substring(0, text.length - 1));
        setSpeed(50);
      } else {
        setText(current.substring(0, text.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.textItems}>
        <h1>Vitor Santos</h1>
        <h2>
          {text}
          <span className={styles.cursor}>|</span>
        </h2>
      </div>
      <div className={styles.countryData}>
          <p>I'm From</p>
          <div className={styles.countryBox}>
            <div
              className={styles.iconWrapper}
            >
              <GiBrazil
                className={styles.brazilIcon}
                color="black"
                strokeWidth={2}
                stroke="lime"
              />
            </div>
      </div>
        <p>Brazil</p>
      </div>
    </div>
  );
}
