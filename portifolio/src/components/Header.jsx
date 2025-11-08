import styles from "../styles/Header.module.css"
import catImage from "../assets/privateinvestocat.jpg"
import { FaHome, FaPhoneAlt, FaQuestion, FaPencilAlt } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";

export default function Header() {
    const date = new Date
    let horas = date.getHours()
    let minutos = date.getMinutes()

    return (
        <div className={styles.headerContainer}>
            <div className={styles.imgContainer}>
                <img src={catImage} alt="Imagem de um Octocat detetive" />
            </div>
            <div className={styles.alignedItems}>
            <h1>Hey There!</h1>
            <nav>
                <div className={styles.iconnedLink}><a href="#">Home</a> <FaHome /></div>
                <div className={styles.iconnedLink}><a href="#">About</a> <FaQuestion /></div>
                <div className={styles.iconnedLink}><a href="#">Projects</a> <PiBagSimpleFill /></div>
                <div className={styles.iconnedLink}><a href="#">Skills</a> <FaPencilAlt /></div>
                <div className={styles.iconnedLink}><a href="#">Contact</a> <FaPhoneAlt /></div>
            </nav>
            </div>


            <p>It's {horas}:{minutos < 10 ? "0" : <></>}{minutos} {horas > 12 ? "PM" : "AM"} right now</p>
        </div>
    )
}