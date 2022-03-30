import React from 'react'
import styles from './header.module.css'

const Header = ({title, children}) =>{
    return (
        <div className={styles.pageHeader}>
            <h4>{title}</h4>
            <div className={styles.right__action}>
                {children}
            </div>
        </div>
    )
}

export default Header