import { useState } from "react"
export default function Onchange() {
    const [name, setname] = useState();
    const [payment, setpayment] = useState();
    const [shiping, setshiping] = useState();
    const handeltextonchange = (event) => {
        setname(event.target.value);
    }
    const handelselectonchange = (event) => {
        setpayment(event.target.value);
    }
    const handelshipingchange = (event) => {
        setshiping(event.target.value);
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <input type="text" placeholder="enter your name" onChange={handeltextonchange} />
            <br />
            <h3>payment: {payment}</h3>
            <select value={payment} onChange={handelselectonchange}>
                <option value="">select an option</option>
                <option value="visa">visa</option>
                <option value="mastercard">mastercard</option>
                <option value="paypal">paypal</option>
            </select>
            <br />
            <label htmlFor="">
                <input
                    type="radio"
                    value="pick up"
                    checked={shiping === "pick up"}
                    onChange={handelshipingchange}
                />
                pick up
            </label>
            <label htmlFor="">
                <input
                    type="radio"
                    value="delevery"
                    checked={shiping === "delevery"}
                    onChange={handelshipingchange}
                />
                delevery
            </label>
            <p>shiping:{shiping}</p>
        </div>
    )
}