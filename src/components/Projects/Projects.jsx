import React from 'react'
import styles from "./Projects.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faSass, faJsSquare,faHtml5,faReact} from '@fortawesome/free-brands-svg-icons'
library.add(fab,faSass,faJsSquare,faHtml5,faReact);

const Projects = () => {
    return (
        <>
        <h3 className={styles.projects__title}>PROJECTS</h3>
        <div className={styles.projects}>
            <article className={styles.project}>
                <img className={styles.project__image} src="https://raw.githubusercontent.com/tea-milas/morse-code-translator/main/assets/screenshot/Screenshot.png" alt="morse code to english translator screenshot"/>
                <section className={styles.project__description}>
                    <h4>MORSE CODE / ENGLISH TRANSLATOR</h4>
                    <p>This is a translator of morse code to english and vice versa. It includes text to speech for english and audio reproduction for morse code. It's made with JS and tested with Jest.</p>
                    <ul>
                        <li><FontAwesomeIcon icon={['fab', 'sass']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'js-square']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'html5']}/></li>
                    </ul>
                    <div className={styles.project__links}>
                        <button><a href="https://github.com/tea-milas/morse-code-translator" target="_blank">CODE</a></button>
                        <button><a href="https://tea-milas.github.io/morse-code-translator/" target="_blank">WEBSITE</a></button>
                    </div>
                </section>   
            </article>

            <article className={styles.project}>
                <section className={styles.project__description}>
                    <h4>NOTESY</h4>
                    <p>Notesy is a note taking app. It was built using React, ES6, SASS and Firebase. It allows users to register, login with email and password or login with a google account, add/delete notes and sign out at the end of their session.</p>
                    <ul>
                        <li><FontAwesomeIcon icon={['fab', 'sass']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'react']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'html5']}/></li>
                    </ul>
                    <div className={styles.project__links}>
                        <button><a href="https://github.com/tea-milas/notesy-app">CODE</a></button>
                        <button><a>WEBSITE</a></button>
                    </div>
                </section>   
                <img className={styles.project__image} src="https://raw.githubusercontent.com/tea-milas/notesy-app/main/src/assets/img/Screenshot_login.png"/>
            </article>

            <article className={styles.project}>
                <img className={styles.project__image} src="https://raw.githubusercontent.com/tea-milas/calculator/main/assets/svg/calculator_img.jpg"/>
                <section className={styles.project__description}>
                    <h4>CALCULATOR</h4>
                    <p>A calculator that can do simple operations between two numbers and non complex multiple operations.</p>
                    <ul>
                        <li><FontAwesomeIcon icon={['fab', 'sass']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'js-square']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'html5']}/></li>
                    </ul>
                    <div className={styles.project__links}>
                        <button><a href="https://github.com/tea-milas/calculator" target="_blank">CODE</a></button>
                        <button><a href="https://tea-milas.github.io/calculator/" target="_blank">WEBSITE</a></button>
                    </div>
                </section>   
            </article>   

            <article className={styles.project}>
                <section className={styles.project__description}>
                    <h4>MEMORY GAME</h4>
                    <p>A game of memory where you need to match leaves before time runs out.</p>
                    <ul>
                        <li><FontAwesomeIcon icon={['fab', 'sass']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'js-square']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'html5']}/></li>
                    </ul>
                    <div className={styles.project__links}>
                        <button><a href="https://github.com/tea-milas/memory-game" target="_blank">CODE</a></button>
                        <button><a href="https://tea-milas.github.io/memory-game/" target="_blank">WEBSITE</a></button>
                    </div>
                </section>   
                <img className={styles.project__image} src="https://raw.githubusercontent.com/tea-milas/memory-game/main/assets/img/screenshot_2.JPG"/>
            </article>

            <article className={styles.project}>
                <img className={styles.project__image} src="https://raw.githubusercontent.com/tea-milas/calculator/main/assets/svg/calculator_img.jpg"/>
                <section className={styles.project__description}>
                    <h4>POTTERY COLLECTIVE</h4>
                    <p>This is a static website I made using HTML5, CSS3 and a bit of vanilla JavaScript.</p>
                    <ul>
                        <li><FontAwesomeIcon icon={['fab', 'sass']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'js-square']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'html5']}/></li>
                    </ul>
                    <div className={styles.project__links}>
                        <button><a href="https://github.com/tea-milas/pottery-collective" target="_blank">CODE</a></button>
                        <button><a href="https://tea-milas.github.io/pottery-collective/" target="_blank">WEBSITE</a></button>
                    </div>
                </section>   
            </article>                

            <span className={styles.vertical_line2}></span>
        </div> 
        </>
    )
}

export default Projects
