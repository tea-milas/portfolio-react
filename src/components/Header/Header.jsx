import React from 'react'
import Animation from './Animation/Animation'
import styles from "./Header.module.scss"
import Title from './Title/Title'

const Header = () => {
    return (
        <header>
            <Title />
            <Animation />
            <span className={styles.vertical_line}></span>
        </header>
    )
}

export default Header
