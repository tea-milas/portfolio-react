import React from 'react'
import styles from "./About.module.scss"
import AboutTitle from './AboutTitle/AboutTitle'
import AboutDescription from './AboutDescription/AboutDescription'


const About = () => {
    return (
        <div className={styles.about}>
            <AboutTitle />
            <AboutDescription />
        </div>
    )
}

export default About
