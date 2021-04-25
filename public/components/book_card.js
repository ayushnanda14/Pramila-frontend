import styles from '../../styles/book_card.module.css'
import Image from 'next/image'

export default function BookCard(props){
    
    return (
        <div className={styles.book_card}>
        <div className={styles.left_image_panel}>
            <Image src={props.src} height="218px" width="136px"></Image>
        </div>
        <div className={styles.right_text_panel}>
            <div className={styles.texter}>
                <h5>{props.bookTitle}</h5>
                <p><strong>Author: </strong>{props.authorName}</p>
                <p><strong>Price: </strong>{props.price}</p>
            </div>
        </div>
    </div>
    )
}