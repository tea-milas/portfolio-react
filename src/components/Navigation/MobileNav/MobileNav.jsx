import React, {useState} from 'react'
import styles from "./MobileNav.module.scss"

const MobileNav = () => {
    const [isOpen,setIsOpen] = useState(false)
   

    const openNav = () => {
        setIsOpen(!isOpen);
      }

    return (
        <div className={styles.navMob}  className={styles.open}>
            <span className={styles.openbtn} onClick={openNav}>&#9776;</span>
            
            {isOpen && <nav className={styles.sideNav} className={styles.open}>
                            <span className={styles.closebtn} onClick={openNav}>X</span>
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
