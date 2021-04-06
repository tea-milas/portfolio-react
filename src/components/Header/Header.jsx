import React from 'react'
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header>
        
        <div className={styles.header__text}>
            <h1>tea milas</h1>
            <h2>web developer</h2>
        </div>

        <div className={styles.header__animation}>
    
            <div className={styles.blob1}>
                <svg viewBox="0 0 518 548" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M261.02 0.018318C324.992 1.31355 358.429 76.3882 402.095 123.158C436.613 160.129 469.785 196.416 488.322 243.476C507.922 293.232 528.514 348.041 510.516 398.398C492.678 448.308 441.206 475.532 395.682 502.678C354.06 527.499 309.318 551.143 261.02 547.177C214.633 543.369 182.052 504.685 141.519 481.81C93.7277 454.84 18.6729 453.768 2.54901 401.314C-13.6297 348.681 51.7021 307.094 72.09 255.944C90.4724 209.827 86.2462 157.301 115.732 117.36C153.632 66.0202 197.219 -1.27343 261.02 0.018318Z" fill="#C4C4C4"/>
                </svg>
            </div>

            <div className={styles.blob2}>
                <svg viewBox="0 0 700 558" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M353.077 9.35549C404.961 16.1963 450.481 36.234 499.042 55.7437C566.992 83.0428 664.077 78.9672 693.385 146.076C722.149 211.942 649.034 277.254 625.426 345.14C602.506 411.046 614.675 498.03 557.217 537.623C499.763 577.213 421.114 548.277 353.077 532.81C298.332 520.365 253.884 488.56 206.812 457.965C156.603 425.331 102.081 399.127 69.7995 348.691C30.2532 286.904 -16.4503 213.714 5.72217 143.786C27.9005 73.8401 107.752 39.6603 176.184 13.1763C232.566 -8.64439 293.138 1.45284 353.077 9.35549Z" fill="#A4742C"/>
                </svg>
            </div> 

        </div>
        
        <span className={styles.vertical_line}></span>

    </header>
    )
}

export default Header
