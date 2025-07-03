import { use } from 'react';
import style from './usergreding.module.css';
import PropTypes from 'prop-types';
export default function UserGreding(props) {
    if (props.isLoggedIn) {
        return (
            <div className={style.greding}>
                <h1>welcome {props.username} </h1>
            </div>
        )
    } else {
        return (
            <div className={style.gredingnot}>
                <h1>please login</h1>
            </div>
        )
    }
}
UserGreding.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
UserGreding.defaultProps = {
    username: 'guest',
    isLoggedIn: false
}