import { Link, NavLink } from "react-router-dom";
export default function Header() {
    return (
        <header>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/lists">lists</NavLink></li>
                <li><NavLink to="/counter">Counter</NavLink></li>
                <li><NavLink to="/food">food</NavLink></li>
                <li><NavLink to="/onchange">onchange</NavLink></li>
                <li><NavLink to="/updateObject">updateObject</NavLink></li>
                <li><NavLink to="/updateArray">updateArray</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <hr />
        </header>
    );
}