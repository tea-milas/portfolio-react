import React from 'react';
import styles from "./AboutDescription.module.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub} from '@fortawesome/free-brands-svg-icons'
library.add(fab,faGithub,fas,faEnvelope);


const AboutDescription = () => {
    return (
        <article className={styles.about__description}>
            <section className={styles.text_and_link}>
                <h4 className={styles.about__text}>hi, i'm <span>tea milas</span>. <br /> i'm a web developer based in london.</h4>
                <ul className={styles.contact__links}>
                    <li>
                        <a href="https://github.com/tea-milas" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'github']}/> </a>
                    </li>
                    <li> 
                        <a href="https://www.linkedin.com/in/tea-milas/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    </li>
                    <li>
                        <a href="mailto: teamilas@hotmail.com"><FontAwesomeIcon icon={['fas', 'envelope']}/></a>
                    </li>
                </ul>
            </section>  
            <img className={styles.contact__img} src="../profileimg.jpg" alt="Tea"/>
              
        </article>
    )
}

export default AboutDescription
