import { Outlet, Link, useNavigate } from "react-router-dom";
export default function Contact() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Contact Page</h1>
            <p>This is the contact page.</p>
            <div>
                <button onClick={() => navigate("info")}> contact info</button>
                <button onClick={() => navigate("form")}> contact info</button>
            </div>
            <Outlet />
        </div>
    );
}