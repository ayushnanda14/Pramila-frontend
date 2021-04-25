import Link from 'next/link'
import styles from '../styles/Layout.module.css'


export default function Layout({ children }) {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.left}>
                    <Link href="/">
                    <h1>GULSHAN</h1>
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/search">
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link href="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.cart_icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <div className={styles.bars}>
                                <div className={styles.bar}></div>
                                <div className={styles.bar}></div>
                                <div className={styles.bar}></div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.container}>
                {children}
            </div>
            <footer className={styles.footer}>
                <div className={styles.left_content}>
                    <p><b>Made By: </b>Team 3<br /><b>Batch: </b>2022<br /></p>
                </div>
                <div className={styles.mid_content}>
                    <h2>OOAD Mini Project Implementation</h2>
                    <p>
                    <b>Abrit Pal Singh</b> 185001007<br/>
                    <b>Aviansh Gupta</b> 185001028<br />
                    <b>Ayush Nanda</b> 185001031<br />
                    </p>
                </div>
                <div className={styles.right_content}>
                    <p><b>Class: </b>CSE A<br /><b>Year: </b>III<br /></p>
                </div>
            </footer>
        </>
    )
}


{
    

}