import React, {useState, useEffect} from 'react'
import MobileNav from './MobileNav/MobileNav'
import styles from "./Navigation.module.scss"

const Navigation = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [text, setText] = useState(false);
    
    //change colour on scroll
    const listenScrollEvent = event => {
        if (window.scrollY < window.innerHeight) {
        return setText(false);
        } else if (window.scrollY > window.innerHeight) {
        return setText(true);
        }
    };

    const completedClass = text ? styles.dark : styles.light;

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);

        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    //check if mobile
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }, []);

    let isMobile = (width <= 760);


    return (
        <>
        {isMobile ? <MobileNav /> :
                    <nav className={styles.navigation}>
                    <ul> 
                        <li>
                            <a className={`${completedClass}`} href="#home">home</a>
                        </li>
                        <li>
                            <a className={`${completedClass}`} href="#projects__title">projects</a>
                        </li>
                        <li>
                            <a className={`${completedClass}`} href="#about">about</a>
                        </li>
                    </ul>
                </nav> }
        
        </>
    )
}

export default Navigation
