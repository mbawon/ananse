import React from 'react'
import styles from './auth-layout.module.css'
import bg from '../assets/images/login-bg.jpg'
import Login from '../login/Login'

const AuthLayout = (props) => {
    return (
        <div className={styles.auth_layout}>
            <div className={styles.left_col}>
                <div className={styles.content1}>
                    <h1>Welcome To Ananse!</h1>
                    <p>Vodafone business solution, business search and opportunity prospecting.</p>
                </div>
                <img src={bg} alt="image" className={styles.bg} />
            </div>
            <div className={styles.right_col}>
                <Login />
            </div>
        </div>
    )
}

export default AuthLayout