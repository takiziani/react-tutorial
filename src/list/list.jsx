import style from './list.module.css';
import PropTypes from 'prop-types';
export default function List(props) {
    const list = props.list;
    list.sort((a, b) => {
        return a.calories - b.calories;
    })
    const listitems = list.map(item => {
        return <li key={item.id} className={style.list}>
            {item.name}: <b>{item.calories}</b> calories
        </li>
    })
    return (
        <>
            <h3 className={style.titel}>{props.category}</h3>
            <ul>{listitems}</ul>
        </>
    )
}
List.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number
        })
    ),
    category: PropTypes.string.isRequired
}