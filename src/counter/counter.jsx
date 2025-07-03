import styles from './counter.module.css';
import { useState } from 'react';
export default function Counter() {
    const [count, setcount] = useState(0);
    const handelincrese = () => {
        setcount(precount => precount + 1);
    };
    const handeldecrese = () => {
        setcount(precount => precount - 1);
    };
    const handelreset = () => {
        setcount(0)
    }
    return (
        <div className={styles.continer}>
            <h2 className={styles.counter} >{count}</h2>
            <button onClick={handeldecrese} className={styles.decrese}>decrese</button>
            <button onClick={handelreset} className={styles.reset}>reset</button>
            <button onClick={handelincrese} className={styles.increse}>increse</button>
        </div>
    )
}