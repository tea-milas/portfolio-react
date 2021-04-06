import React, {useState, useEffect} from 'react'
import MobileNav from './MobileNav/MobileNav'
import styles from "./Navigation.module.scss"

const Navigation = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }, []);

    let isMobile = (width <= 768);

    return (
        <>
        {isMobile ? <MobileNav /> :
                    <nav className={styles.navigation}>
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
                </nav> }
        
        </>
    )
}

export default Navigation
