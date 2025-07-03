import photo from '../assets/photo.jpg';
import styles from './Card.module.css';
export default function Card2() {
    return (
        <div className={styles.card}>
            <img src={photo} alt="photo" className={styles.cardImg} />
            <h2>taki eddine</h2>
            <p>Developer and Enterpreneur</p>
        </div>
    );
}