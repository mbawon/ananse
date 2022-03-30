import React from 'react'
import styles from './card.module.css'


const Card = ({size, bg, children}) => {
    return (
        <div className={styles.card} style={{width:`${size}`, backgroundColor:`${bg}`}}>
            {children}
        </div>
    )
}

export default Card