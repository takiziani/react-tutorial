import styles from './student.module.css';
import PropTypes from 'prop-types';
export default function Student(props) {
    return (
        <div className={styles.student}>
            <h3 className={styles.titel}> Student</h3>
            <p className={styles.info}>Name: {props.name}</p>
            <p className={styles.info}>Age: {props.age}</p>
            <p className={styles.info}>Is student: {props.isStudent ? "yes" : "no"}</p>
        </div>
    )
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Student.defaultprops = {
    name: "Guest",
    age: 0,
    isStudent: false
}