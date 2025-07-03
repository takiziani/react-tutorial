import { useState } from "react";
export default function UpdateObject() {
    const [car, setcar] = useState({});
    const handelmakerchange = (event) => {
        setcar(precar => ({ ...precar, maker: event.target.value }))
    };
    const handelyearchange = (event) => {
        setcar(precar => ({ ...precar, year: event.target.value }))
    };
    const handelmodelchange = (event) => {
        setcar(precar => ({ ...precar, model: event.target.value }))
    };
    return (
        <div>
            <h3>update object</h3>
            <input type="text" placeholder="enter the maker of the car" onChange={handelmakerchange} />
            <br />
            <input type="number" placeholder="enter the year of the car" onChange={handelyearchange} />
            <br />
            <input type="text" placeholder="enter the model of the car" onChange={handelmodelchange}
            />
            <p>your car is {car.maker} {car.year} {car.model} </p>
        </div>
    )
}