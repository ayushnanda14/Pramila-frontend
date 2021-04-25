import styles from './../styles/search.module.css'
import Layout from './../pages/layout'
import Link from 'next/link'
import BookCard from './../public/components/book_card'
import { useCallback, useRef, useState } from 'react'
import axios from 'axios'

export default function Search(){
    const data = [
        {
            title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
            author: "Jeff Keller",
            img: "book_img2.jpg",
            price: "161.00"
        },
        {
            title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
            author: "Jeff Keller",
            img: "book_img2.jpg",
            price: "161.00"
        },
        {
            title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
            author: "Jeff Keller",
            img: "book_img2.jpg",
            price: "161.00"
        },
        {
            title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
            author: "Jeff Keller",
            img: "book_img2.jpg",
            price: "161.00"
        },
        {
            title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
            author: "Jeff Keller",
            img: "book_img2.jpg",
            price: "161.00"
        }
    ]
    const searchRef = useRef(null)
    const [results, setResults] = useState([])
    const [active, setActive] = useState(false)
    const [query, setQuery] = useState('')

    const searchEndPoint = (query) => `http://localhost:9000/books/${'$'}query=${query}`
    // const getData = (e) => { 

    // } 
    const onChange = useCallback((event) => { 
        const queryString = event.target.value
        setQuery(queryString)
    },[])
    const getData = useCallback((event,query) =>{ 
        // const queryString = document.getElementById("search").value
        console.log(searchEndPoint(query))
        if(query.length){
            axios.get(searchEndPoint(query))
            .then(res => { 
                setResults(res.data.data)
                console.log(res.data.data)
            })
            // .then( res => res//)
        } else {
            setResults([])
        }
    },[])
    
    // const onFocus = useCallback(() => {
    //     setActive(true)
    //     window.addEventListener('click', onClick)
    // }, [])

    // const onClick = useCallback((event) => { 
    //     if(searchRef.current && !searchRef.current.contains(event.target)) {
    //         setActive(false)
    //         window.removeEventListener('click', onClick)
    //     }
    // }, [])
    const data1 = []
    const genres = ['Action', 'Thriller', 'Mystery', 'Comedy', 'Romantic', 'Comedy', 'Romantic', 'Comedy', 'Romantic']
    const images = ['book1.jpg']

    return( 
        <Layout>
            <div className={styles.container}>
        <div className={styles.search_container}>
            <h2 className={styles.headerTitle}>Search</h2>
<div className={styles.search_inputs}>
            <div className={styles.row}>
                <input 
                    type="text" 
                    placeholder="search" 
                    id="search"
                    onChange={onChange}
                    // onFocue={onFocus}
                    value={query}/>
            </div>  
            <div className={styles.row}>
                {/* <Link href="/"> */}
                    <button onClick={(e) => {getData(e,query)}}>Search</button>
                {/* </Link> */}
            </div>
</div>
        </div>
        <div className={styles.results_container} ref={searchRef}>
            <ul className={styles.ul}>
                {console.log(results.length)}
                {results.length > 0 && results.map((book) => (
                    <Link href={{
                        pathname: "/books/[bookId]",
                        query: { bookId: book.bookId }
                    }}>
                        <li className={styles.li}>
                            <BookCard src={"/" + book.img} bookTitle={book.title} authorName={book.author} price={book.price} />
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
            </div>
</Layout>
    )
}
