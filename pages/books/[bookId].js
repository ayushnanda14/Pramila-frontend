import Layout from '../layout'
import { useRouter } from 'next/router'
import styles from '../../styles/Book.module.css'
import Image from 'next/image'
import axios from 'axios'
// import styles from '../../styles/[bookId].module.css'
export default function Book({ book }) {
    
    const router = useRouter();
    const { id } = router.query
    console.log(book)
    return (
        <>
            <Layout>
                <div className={styles.big_container}>
                    <div className={styles.book_info_container}>
                        <div className={styles.book_container_col_one}>
                            {/* <div className={styles.book_image}> */}
                            <Image src={`/../public/${book.img}`} height="218px" width="136px"></Image>
                            {/* </div> */}

                            <button className={styles.buy_button}>Add to cart</button>
                        </div>
                        <div className={styles.book_container_col_two}>
                            <h2>{book.title}</h2>
                            <p><strong>Author: </strong>{book.author}</p>
                            <p><strong>Genre: </strong>{book.genre}</p>
                            <p><strong>Rating: </strong>{book.rating} <span><svg height="25" width="23" data-rating="1">
                                <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
                            </svg></span></p>
                            <p><strong>Price: </strong>{book.price}</p>
                            <p>{book.desc}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export async function getStaticPaths(){
    const res = await axios.get(`http://localhost:9000/books/`)
    const paths = res.data.data.map((book) => ({ params : { bookId : ''+book.bookId }}))
    return{
        paths,
        fallback: true,
    }
}

export async function getStaticProps({ params }){
    const res = await axios.get(`http://localhost:9000/books/${params.bookId}`)
    const book = res.data.data
    console.log(book)
    return{
        props: { book },
    }
}