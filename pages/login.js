import styles from '../styles/login.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
export default function Login() {
    const password = 'gmail@123'
    const username = 'aviansh'
    const [ifwrong, setifwrong] = useState(false)
    const data = [
        {
            userID: "ayush",
            password: "ayush123"
        },
        {
            userID: "aviansh",
            password: "google123"
        },
        {
            userID: "apple",
            password: "apple123"
        }
    ]

    const router = useRouter()
    const handleClick = (event) => {
        const user = document.getElementById("username").value
        const pass = document.getElementById("password").value
        console.log(user, pass)
        for (var i in data) {
            // console.log(data[i])
            if (data[i].userID === user && data[i].password === pass) {
                router.push('/')
                setifwrong(false)
                return
            }
        }
        setifwrong(true)
        console.log(ifwrong)
        console.log("string")
    }
    return (
        <div className={styles.body}>
        <div className={styles.loginform}>
            <h2 className={styles.headerTitle}>Login</h2>
            <div className={styles.row}>
                {/* <label>Username</label> */}
                <input type="text" placeholder="username" id="username" />

            </div>
            <div className={styles.row}>
                {/* <label>Password</label> */}
                <input type="password" placeholder="password" id="password" />
            </div>
            <div className={styles.row}>
                <p className={ifwrong ? styles.correctpass : styles.wrongpass}>Username or Password incorrect</p>
                <button onClick={(event) => handleClick(event)}>Login</button>
            </div>

        </div>
    </div>
    )
}
