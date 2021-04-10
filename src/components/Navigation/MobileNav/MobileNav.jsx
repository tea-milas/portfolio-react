import React, {useState} from 'react'
import classNames from "classnames"
import styles from "./MobileNav.module.scss"

const MobileNav = () => {
    const [isOpen,setIsOpen] = useState(false)
   

    const openNav = () => {
        setIsOpen(!isOpen);
      }
      console.log("e", isOpen)

    return (
        <div className={styles.mobileNav}>
            <button className={styles.openbtn} onClick={openNav}>&#9776;</button>
            
            {isOpen && <nav className={styles.sidepanel}>
                            <button className={styles.closebtn} onClick={openNav}>X</button>
                            <ul>
                                <li>
                                    <a href="#home">home</a>
                                </li>
                                <li>
                                    <a href="#projects__title">projects</a>
                                </li>
                                <li>
                                    <a href="#about">about</a>
                                </li>
                            </ul>
                        </nav>}
        </div>
    )
}

export default MobileNav
