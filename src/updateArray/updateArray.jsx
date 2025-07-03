import { element } from "prop-types";
import { useState } from "react";
export default function UpdateArray() {
    const [food, setfood] = useState(["apple"]);
    const handeladdfood = () => {
        const newfood = document.getElementById("input").value;
        document.getElementById("input").value = "";
        setfood(prefood => [...prefood, newfood]);
    };
    const handelremovefood = (index) => {
        setfood(food.filter((_, i) => i !== index));
    }
    const fooditems = food.map((fooditem, index) => {
        return <li key={index} onClick={() => handelremovefood(index)}>{fooditem}</li>
    })
    return (
        <div>
            <h3>list of food</h3>
            <ul>
                {fooditems}
            </ul>
            <p>Add item</p>
            <input type="text" id="input" placeholder="enter here" />
            <button onClick={handeladdfood}>add</button>
        </div>
    )
}