import styles from "../styles/Header.module.css"
import catImage from "../assets/privateinvestocat.jpg"
import { FaHome, FaPhoneAlt, FaQuestion, FaPencilAlt } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRef, useState } from "react";

export default function Header() {
    const date = new Date
    const boxRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    let horas = date.getHours()
    let minutos = date.getMinutes()
    
    const openBox = () => {
        if (!isOpen) {
            setIsOpen(true)
            boxRef.current.style.display = "flex"
            boxRef.current.classList.add("animatedClass")
        } else {
            setIsOpen(false)
            boxRef.current.style.display = "none"
        }
    }
    return (
        <div className={styles.headerContainer}>
            <div className={styles.imgContainer}>
                <img src={catImage} alt="Imagem de um Octocat detetive" />
            </div>
            <div className={styles.alignedItems}>
             <h1 className={styles.introText}>Hey There! I just landed.</h1>
            <nav>
                <div className={styles.iconnedLink}><a href="#">Home</a> <FaHome /></div>
                <div className={styles.iconnedLink}><a href="#">About</a> <FaQuestion /></div>
                <div className={styles.iconnedLink}><a href="#">Projects</a> <PiBagSimpleFill /></div>
                <div className={styles.iconnedLink}><a href="#">Skills</a> <FaPencilAlt /></div>
                <div className={styles.iconnedLink}><a href="#">Contact</a> <FaPhoneAlt /></div>
            </nav>
            <div className={styles.menuContainer}>
                <div className={styles.menuIconBox}>
                    <GiHamburgerMenu className={styles.menuIcon} style={{display: "block", margin: "auto"}} onClick={openBox} cursor={"pointer"} />
                </div>
                <div className={styles.menuItemsBox}>
                    <nav className={styles.compactNav} ref={boxRef}>
                        <div className={styles.iconnedLink}><a href="#">Home</a> <FaHome /></div>
                        <div className={styles.iconnedLink}><a href="#">About</a> <FaQuestion /></div>
                        <div className={styles.iconnedLink}><a href="#">Projects</a> <PiBagSimpleFill /></div>
                        <div className={styles.iconnedLink}><a href="#">Skills</a> <FaPencilAlt /></div>
                        <div className={styles.iconnedLink}><a href="#">Contact</a> <FaPhoneAlt /></div>
                    </nav>
                </div>
            </div>

            </div>


            <p>It's {horas}:{minutos < 10 ? "0" : <></>}{minutos} {horas > 12 ? "PM" : "AM"} right now</p>
        </div>
    )
}