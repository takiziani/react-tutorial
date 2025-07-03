import { useNavigate } from "react-router-dom";
export default function Button() {
    // let count = 0;
    // const handleclick = () => {
    //     count++;
    //     console.log(count);
    //     const p = document.getElementById("1");
    //     p.innerHTML = `You have clicked the button ${count} times`;
    // }
    const navigate = useNavigate();
    const handleclick = (event) => {
        event.target.textContent = "Clicked!";
        navigate("/about", { replace: true });
    }
    return (
        <>
            <button onClick={(event) => {
                handleclick(event);
            }}>click Here</button>
            <p id="1"></p>
        </>
    )
}