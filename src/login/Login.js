import React, { Fragment, useState } from 'react'
import styles from './login.module.css'
import allStyles from '../main.module.css'
import logo from '../assets/images/vodafone.png'
import userServices from '../services/user.service'
import { useDispatch } from 'react-redux'
import { setUsers } from '../features/user.feature'

const Login = (props) => {
    const [error, setError] = useState(false)
    const [processing, setProcessing] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [credential, setCredential] = useState({})

    const dispatch = useDispatch()

    const handleLoginInputChange = (e) => {
        let key = e.target.name
        let val = e.target.value
        setCredential(prev => {
            return {
                ...prev, [key]: val
            }
        })
    }

    const handlLogin = async (e) => {
        e.preventDefault()
        try {
            setProcessing(true)
            const loggedIn = await userServices.login(credential)
            setProcessing(false)
            dispatch(setUsers(loggedIn.user))
        } catch (error) {
            setError(true)
            setProcessing(false)
            setTimeout(() => {
                setError(false)
            }, 5000);
        }
    }

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Fragment>
            <img src={logo} alt="logo" width="70" />
            <br />
            <h1 className={styles.login_header}>Login</h1>
            <form onSubmit={handlLogin} className={styles.login_form}>
                <input type="email" name='email' placeholder="Email address" autoFocus className={allStyles.input_control} onChange={handleLoginInputChange} />
                <div className={styles.input_group}>
                    <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className={allStyles.input_control} onChange={handleLoginInputChange} />
                    {credential.password && <i className={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'} style={{ position: "absolute", right: 20, top: 35, cursor: "pointer" }} onClick={togglePassword} ></i>}
                </div>
                {error && <div className={allStyles.error}>Error</div>}
                <br />
                <button type='submit' className={styles.login_btn} disabled={processing || Object.keys(credential).length < 2}>
                    {
                        processing ? <div className={`${allStyles.loader} ${allStyles.small__loader}`}></div> : "Login"
                    }    
                </button>
            </form>
        </Fragment>
    )
}

export default Login