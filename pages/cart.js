import Layout from './layout'
// import styles from "./../styles/Book.module.css"
import styles from "./../styles/Cart.module.css"
import Image from 'next/image'
import { useState } from 'react'
import { Router, useRouter } from 'next/router'

export default function Cart(props) {

    const router = useRouter()
    var TotalAmount = 0
    const [payment_opt, setpayment_opt] = useState(false)
    const [confirmpayment, setconfirmpayment] = useState("")
    const [Items, setItems] = useState(
        {
            userID: "",
            books: [
                {
                    bookId: 3,
                    title: "The Boy in the Striped Pyjamas",
                    author: "John Boyne",
                    genre: "Fiction",
                    img: "the_boy_in_striped_pajamas.jpg",
                    price: "210",
                    date: "31-05-2007",
                    desc: "The story of The Boy in the Striped Pyjamas is very difficult to describe. Usually we give some clues about the book on the back cover, but in this case we think that would spoil the reading of the book. We think it is important that you start to read without knowing what it is about.If you do start to read this book, you will go on a journey with a nine- year - old boy called Bruno. (Though this isn't a book for nine-year-olds. And sooner or later you will arrive with Bruno at a fence.Fences like this exist all over the world. We hope you never have to encounter such a fence.",
                    rating: "4.2"
                },
                {
                    bookId: 4,
                    title: "The Book of Gold Leaves",
                    author: "Mirza Waheed",
                    genre: "Fiction",
                    img: "book_of_gold_leaves.jpg",
                    price: "450",
                    date: "01-10-2014",
                    desc: "'The Book of Gold Leaves' is a heartbreaking love story set in war-torn Kashmir. In an ancient house in the city of Srinagar, Faiz paints exquisite papier mache pencil boxes for tourists. Evening is beginning to slip into night when he sets off for the shrine. There he finds the woman with the long black hair. Roohi begs for the boy of her dreams to come and take her away. She wants a love story, an age-old tale of love, war, temptation, duty and choice.",
                    rating: "3.7"

                },
                {
                    bookId: 5,
                    title: "Loveboat, Taipei",
                    author: "Abigail Hing Wen",
                    genre: "Young Adult",
                    img: "love_boat_taipei.jpg",
                    price: "600",
                    date: "07-01-2020",
                    desc: "When eighteen-year-old Ever Wong’s parents send her from Ohio to Taiwan to study Mandarin for the summer, she finds herself thrust among the very over-achieving kids her parents have always wanted her to be, including Rick Woo, the Yale-bound prodigy profiled in the Chinese newspapers since they were nine—and her parents’ yardstick for her never-measuring-up life.Unbeknownst to her parents, however, the program is actually an infamous teen meet - market nicknamed Loveboat, where the kids are more into clubbing than calligraphy and drinking snake - blood sake than touring sacred shrines.Free for the first time, Ever sets out to break all her parents’ uber - strict rules—but how far can she go before she breaks her own heart ?",
                    rating: "3.8"
                }
            ]
        }
    )

    function arrayRemove(arr, value) {

        return arr.filter(function (ele) {
            return ele.ID != value;
        });
    }

    const handleClick = (event, IDval) => {
        // console.log(Items);
        // console.log(IDval)


        Items.books = arrayRemove(Items.books, IDval)
        setItems(Items);
        // console.log(Items);
        router.push('/cart')
    }
    const CartItems = (props) => (
        <div className={styles.book_info_container}>
            <div className={styles.book_container_col_one}>

                <Image src={'/../public/'+props.img} height="174px" width="108px"></Image>


                <button className={styles.buy_button} onClick={(event) => handleClick(event, props.bookID)}>Delete from cart</button>
            </div>
            <div>
    
                <h3>{props.bookName}</h3>
                <p><strong>Author: </strong>{props.authorName}</p>
                <p><strong>Price: </strong>₹ {props.bookPrice}</p>
            </div>
        </div>
    );
    function paymentype() {

        if (confirmpayment === "UPI ID")
            return confirmpayment;
        else if (confirmpayment === "CARD NO")
            return confirmpayment;
        return ""
    }
    function handleconfirm(){
        
    }
    return (
        <>
            <Layout>
               
                <div className={styles.cart_container}>
                    {Items.books.map((book) => {
                        TotalAmount += parseInt(book.price)
                        return (
                            <CartItems
                        
                                bookName={book.title}
                                authorName={book.author}
                                bookPrice={book.price}
                                img= {book.img}
                                />)
                    })}

                </div>
                <div className={styles.total_amount}>
                    <h3 >Total Amount: {TotalAmount ? TotalAmount : ""}</h3>
                    {/* {console.log(payment_opt)} */}
                    <button className={styles.pay_button} onClick={() => setpayment_opt(true)}>Pay Now</button>
                    {/* {console.log(payment_opt)} */}
                </div>
                <div className={payment_opt ? styles.payment_options : styles.nopayment_options}>
                    <h3>Choose Payment Option</h3>
                    <div className={styles.payment_container}>
                        <div>
                            <label>UPI</label>
                            <input type="radio" name="payment" onClick={() => setconfirmpayment("UPI ID")}></input>
                        </div>
                        <div>
                            <lable>Debit Card</lable>
                            <input type="radio" name="payment" onClick={() => setconfirmpayment("CARD NO")}></input>
                        </div>
                    </div>
                    <div className={styles.showpayment_fields}>
                        {/* {console.log(paymentype())} */}
                        <input type="text" placeholder={paymentype()} ></input>
                        <input type="text" placeholder="OTP"></input>
                    </div>
                    <button className={styles.confirm_button} onClick={handleconfirm}>confirm</button>
                </div>

            </Layout>
        </>
    )
}