import Student from "../student/student";
import UserGreding from "../usergreding/usergreding";
export default function About() {
    return (
        <div>
            <h1>about</h1>
            <Student age={30} isStudent={false} />
            <Student name="taki" age={22} isStudent={true} />
            <UserGreding isLoggedIn={true} username="taki" />
        </div>
    )
}