import React from 'react'
import styles from "./AboutTitle.module.scss"

const AboutTitle = () => {
    return (
        <div className={styles.title}>
           <h3 className={styles.about__title}>ABOUT</h3>
            <div className={styles.about__blob}>
                <svg viewBox="0 0 187 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M81.3774 5.26663C99.737 3.8716 118.352 -4.35141 135.217 3.04729C153.791 11.1957 167.275 28.0819 175.597 46.6005C184.611 66.6596 191.438 89.978 183.499 110.488C175.684 130.676 155.175 143.294 135.077 151.277C118.021 158.052 99.4742 154.09 81.3774 151.053C66.2394 148.512 52.4179 143.247 39.3358 135.207C25.138 126.482 8.97022 118.327 2.87013 102.804C-3.36513 86.9364 1.72966 69.2712 7.06186 53.077C12.3727 36.9477 18.8949 19.9812 33.1633 10.8017C47.1149 1.82603 64.8425 6.523 81.3774 5.26663Z" fill="#A4742C"/>
                </svg>     
            </div>
        </div>
    )
}

export default AboutTitle
