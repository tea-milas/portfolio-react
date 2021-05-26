import React, {useState,useEffect} from 'react'
import styles from "./Projects.module.scss"
import knowaste_img from "../../assets/img/knowaste_screenshot.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faSass, faJsSquare,faHtml5,faReact,faCss3} from '@fortawesome/free-brands-svg-icons'
library.add(fab,faSass,faJsSquare,faHtml5,faReact,faCss3);


const Projects = () => {
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

    let isMobile = (width <= 760);

    return (
        <>
        <h3 className={styles.projects__title} id="projects__title">PROJECTS</h3>
        <div className={styles.projects}>
            <article className={styles.project}>
                <img className={styles.project__image} src="https://raw.githubusercontent.com/tea-milas/notesy-app/main/src/assets/img/Screenshot_login.png" alt="notesy img"/>
                <section className={styles.project__description}>
                    <h4>Notesy</h4>
                    <p>Notesy is a note taking app. It was built using React, ES6, SASS and Firebase. It allows users to register, login with email and password or login with a google account, add/delete notes and sign out at the end of their session.</p>
                    <ul>
                        <li><FontAwesomeIcon icon={['fab', 'sass']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'react']}/></li>
                        <li><FontAwesomeIcon icon={['fas', 'database']}/></li>
                    </ul>
                    <div className={styles.project__links}>
                        <button><a href="https://github.com/tea-milas/notesy-app" target="_blank" rel="noreferrer">CODE</a></button>
                        <button><a href="https://notesy.teamilas.com/" target="_blank" rel="noreferrer">WEBSITE</a></button>
                    </div>
                </section>   
            </article>


            <article className={styles.project}>
                {isMobile && <img className={styles.project__image} src="https://raw.githubusercontent.com/tea-milas/morse-code-translator/main/assets/screenshot/Screenshot.png" alt="morse code to english translator screenshot"/>}
                <section className={styles.project__description}>
                    <h4>Morse code / English translator</h4>
                    <p>A translator of morse code to english and vice versa. It includes text to speech for english and audio reproduction for morse code. It's made with vanilla JavaScript and tested with Jest. It was made by writing the tests first.</p>
                    <ul>
                        <li><FontAwesomeIcon icon={['fab', 'sass']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'js-square']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'html5']}/></li>
                    </ul>
                    <div className={styles.project__links}>
                        <button><a href="https://github.com/tea-milas/morse-code-translator" target="_blank" rel="noreferrer">CODE</a></button>
                        <button><a href="https://tea-milas.github.io/morse-code-translator/" target="_blank" rel="noreferrer">WEBSITE</a></button>
                    </div>
                </section>   
               {!isMobile && <img className={styles.project__image} src="https://raw.githubusercontent.com/tea-milas/morse-code-translator/main/assets/screenshot/Screenshot.png" alt="morse code to english translator screenshot"/>} 
            </article>

            <article className={styles.project}>
                <img className={styles.project__image} src={knowaste_img} alt="knowaste img"/>
                <section className={styles.project__description}>
                    <h4>KnoWaste</h4>
                    <p>A 4 week client project - waste reduction service for students and catering canteens. I was involved in different roles, from being a designer, working on the front-end, 
                        to being a product owner and integrating part of the front-end with Firebase.
                    </p>
                    <ul>
                        <li><FontAwesomeIcon icon={['fab', 'sass']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'react']}/></li>
                        <li><FontAwesomeIcon icon={['fas', 'database']}/></li>
                    </ul>
                    <div className={styles.project__links}>
                        <button><a href="https://github.com/nology-tech/knowaste" target="_blank" rel="noreferrer">CODE</a></button>
                        <button><a href="https://knowaste-3c92c.web.app/" target="_blank" rel="noreferrer">WEBSITE</a></button>
                    </div>
                </section>   
            </article>   

            <article className={styles.project}>
                {isMobile && <img className={styles.project__image} src="https://raw.githubusercontent.com/tea-milas/calculator/main/assets/svg/calculator_img.jpg" alt="calculator img"/>}
                <section className={styles.project__description}>
                    <h4>Calculator</h4>
                    <p>A calculator that can do simple operations between two numbers and non complex multiple operations. It was made with vanilla JavaScript and was tested with Cypres</p>
                    <ul>
                        <li><FontAwesomeIcon icon={['fab', 'sass']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'js-square']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'html5']}/></li>
                    </ul>
                    <div className={styles.project__links}>
                        <button><a href="https://github.com/tea-milas/calculator" target="_blank" rel="noreferrer">CODE</a></button>
                        <button><a href="https://tea-milas.github.io/calculator/" target="_blank" rel="noreferrer">WEBSITE</a></button>
                    </div>
                </section> 
               {!isMobile && <img className={styles.project__image} src="https://raw.githubusercontent.com/tea-milas/calculator/main/assets/svg/calculator_img.jpg" alt="calculator img"/>  }
            </article>   

            <article className={styles.project}>
                <img className={styles.project__image} src="https://raw.githubusercontent.com/tea-milas/memory-game/main/assets/img/screenshot_2.JPG" alt="memory game preview"/>
                <section className={styles.project__description}>
                    <h4>Memory game</h4>
                    <p>A game of memory where you need to match leaves before time runs out. Made with vanilla JavaScript</p>
                    <ul>
                        <li><FontAwesomeIcon icon={['fab', 'sass']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'js-square']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'html5']}/></li>
                    </ul>
                    <div className={styles.project__links}>
                        <button><a href="https://github.com/tea-milas/memory-game" target="_blank" rel="noreferrer">CODE</a></button>
                        <button><a href="https://tea-milas.github.io/memory-game/" target="_blank" rel="noreferrer">WEBSITE</a></button>
                    </div>
                </section>   
            </article>

            <article className={styles.project}>
               {isMobile && <img className={styles.project__image} src="https://raw.githubusercontent.com/tea-milas/pottery-collective/main/assets/img/Screenshot_homepage.png" alt="pottery collective homepage"/>}
                <section className={styles.project__description}>
                    <h4>Pottery collective</h4>
                    <p>A static website made using HTML5, CSS3 and a bit of vanilla JavaScript.</p>
                    <ul>
                        <li><FontAwesomeIcon icon={['fab', 'css3']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'js-square']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'html5']}/></li>
                    </ul>
                    <div className={styles.project__links}>
                        <button><a href="https://github.com/tea-milas/pottery-collective" target="_blank" rel="noreferrer">CODE</a></button>
                        <button><a href="https://tea-milas.github.io/pottery-collective/" target="_blank" rel="noreferrer">WEBSITE</a></button>
                    </div>
                </section>  
                {!isMobile && <img className={styles.project__image} src="https://raw.githubusercontent.com/tea-milas/pottery-collective/main/assets/img/Screenshot_homepage.png" alt="pottery collective homepage"/>} 
            </article>

            <article className={styles.project}>
                <img className={styles.project__image} src="https://raw.githubusercontent.com/tea-milas/punk-API/main/punk_api_screenshot.png" alt="PUNK API preview"/>
                <section className={styles.project__description}>
                    <h4>Punk API</h4>
                    <p>A React App that uses the Punk API to fetch data and display it on the application. The user can search and filter the beer selection by a range of properties. </p>
                    <ul>
                        <li><FontAwesomeIcon icon={['fab', 'sass']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'js-square']}/></li>
                        <li><FontAwesomeIcon icon={['fab', 'react']}/></li>
                    </ul>
                    <div className={styles.project__links}>
                        <button><a href="https://github.com/tea-milas/punk-API" target="_blank" rel="noreferrer">CODE</a></button>
                        <button><a href="https://punkapi.teamilas.com/" target="_blank" rel="noreferrer">WEBSITE</a></button>
                    </div>
                </section>   
            </article>                     

            <span className={styles.vertical_line2}></span>
        </div> 
        </>
    )
}

export default Projects
